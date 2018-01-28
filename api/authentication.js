import mongoose from 'mongoose';
import moment from 'moment';
import User from './models/users.js';
let async = require('async');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');
let fs = require('fs');
let path = require('path');
let constantObj = require('./common/constants.js');
let commonObj = require('./common/common');


function generateToken(user) {
    let payload = {
        iss: 'my.domain.com',
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(7, 'days').unix()
    };
    return jwt.sign(payload, process.env.TOKEN_SECRET);
}

exports.isAuthenticated = function(req,res,next) {
    var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
        var userID = jwt.verify(token, process.env.TOKEN_SECRET);
        req['user'] = userID;
    } catch (err) {
        return res.status(400).send({
                success: false,
                error: {
                    message : "Unauthorized",
                }
        })
    }
     next();
};


module.exports.register = function(req, res) {
    // Validation of the required fields
    req.assert('firstName', 'First name cannot be blank.').notEmpty();
    req.assert('lastName', 'Last name cannot be blank.').notEmpty();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();
    // req.assert('gender', 'Gender cannot be blank.').notEmpty();

    // To show error if not validate fields
    let error = req.validationErrors();
    if (error) {
        return res.status(400).send({
            error: true,
            msg: constantObj.messages.requiredParams,
            err: error
        });
    }

    let userObj          = req.body;
    userObj['fullName']  = userObj.firstName + ' ' + userObj.lastName;
    userObj['is_active'] = true;

    User.findOne({ email: userObj.email }, function (err, rec) {
        if(rec) {
            return res.status(200).send({
                error: true,
                msg: constantObj.messages.emailAlreadyExist,
            })
        } else {
    
            //Store password in a variable
            // let password = userObj.password;
            //Remove password key from requested object
            // delete userObj.password;

            let user = new User(userObj);
            //Set user password
            // user.setPassword(password);
           
            //save user info
            user.save(function(err, result) {
                //insert current day quotes data into user quotes collection.
                return res.status(200).send({
                    error: false,
                    msg: constantObj.messages.userSuccess,
                    "data": result
                })
            });
        }
    });
};

exports.login = function(req, res, next) {

    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password cannot be blank').notEmpty();

    req.sanitize('email').normalizeEmail({
        remove_dots: false
    });

    let errors = req.validationErrors();
    if (errors) {
        return res.status(400).send({
            msg: constantObj.messages.requiredParams,
            err: errors
        });
    }
    
    User.findOne({
        email: req.body.email,
        is_active:true,
        // is_deleted:false
    }).exec(function(err, user) {

        if(!user){
            return res.status(400).send({
                msg: 'User Not Found',//constantObj.messages.requiredParams,
                err: err
            });
        }
         
        let mydata = {
                        _id: user._id,
                        email: user.email,
                        fullName: user.fullName,
                        firstName:user.firstName,
                        is_admin: user.is_admin,
                        password: user.password,
                        mobile_number: user.mobile_number
                    }
        //- this condition is for check that this account is active or not---- 
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (!isMatch) {
                return res.status(401).send({
                    msg: 'Invalid email or password'
                });
            } else {
                userUpdateFunction(mydata._id);
                res.status(200).send({
                    token: generateToken(mydata),
                    data: mydata,
                });
            }
        });
    })
}


let userUpdateFunction = function(id){
    User.update({_id:id},{$set:{
        last_login:new Date()
    }}).exec(function(err,data){

    })
}

exports.forgotPassword = function(req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    
    req.sanitize('email').normalizeEmail({
        remove_dots: false
    });

    let errors = req.validationErrors();
    if (errors) {
        return res.status(400).send({
            msg: constantObj.messages.requiredParams,
            err: errors
        });
    }

    async.waterfall([
        function(done) {
            crypto.randomBytes(16, function(err, buf) {
                let token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            User.findOne({
                email: req.body.email
            }, function(err, user) {
                if (!user) {
                    return res.status(400).send({
                        msg: 'The email address ' + req.body.email + ' is not associated with any account.'
                    });
                }
                user.passwordResetToken = token;
                user.passwordResetExpires = Date.now() + 3600000; // expire in 1 hour
                user.save(function(err) {
                    done(err, token, user);
                });
            });
        },
        function(token, user, done) {
            let to = user.email,
                from = 'manpreet@iamlvc.com',
                subject = constantObj.mailContent.subjectForgotPassword,
            imageUrl = "http://" + req.headers.host + "/" + "uploadedFiles/banner.jpg",
            contentOf = constantObj.mailContent.forgotPasswordText + constantObj.frontendUrl.url + '/#' + constantObj.frontendUrl.forgotPostRoute + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n';

            let text = fs.readFileSync(path.join(__dirname + '/email-template/emailer.html'), 'utf-8');

            text = text.replace("{{username}}", user.fullName);
            text = text.replace("{{bodyText}}", contentOf);

            commonObj.sendMail(to, from, subject, text, function(err, data) {
                console.log(err, data);
                if (err) {
                    res.status(400).send({
                        msg: constantObj.messages.errorInSendingMail,
                        "err": err
                    });
                } else {
                    res.status(200).send({
                        msg: constantObj.messages.adminForgotPassword
                    });
                }
            })
        }
    ]);
};


exports.resetPassword = function(req, res, next) {
    req.assert('password', 'Password must be at least 4 characters long').len(4);
    req.assert('confirm', 'Passwords must match').equals(req.body.password);
    req.checkParams('token', 'Token is required.').notEmpty();
    let errors = req.validationErrors();
    if (errors) {
        return res.status(400).send({
            msg: constantObj.messages.requiredParams,
            err: errors
        });
    }
    console.log(req.params.token);
    async.waterfall([
        function(done) {
            User.findOne({
                    passwordResetToken: req.params.token
                })
                .exec(function(err, user) {
                    console.log(err, user)
                    if (!user) {
                        return res.status(400).send({
                            msg: constantObj.messages.passwordResetToken
                        });
                    }
                    user.password = req.body.password;
                    user.passwordResetToken = undefined;
                    user.passwordResetExpires = undefined;
                    user.save(function(err) {
                        done(err, user);
                    });
                });
        },
        function(user, done) {
            let to = user.email,
                from = 'manpreet@iamlvc.com',
                subject = '✔ Your password has been changed',
                text = 'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'

            commonObj.sendMail(to, from, subject, text, function(err, data) {
                console.log(err, data);
                if (err) {
                    res.status(400).send({
                        msg: constantObj.messages.errorInSendingMail,
                        "err": err
                    });
                } else {
                    res.status(200).send({
                        msg: constantObj.messages.mailSentSuccessfully
                    });
                }
            })
        }
    ]);
};
