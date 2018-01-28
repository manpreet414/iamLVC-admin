let async = require('async');
let mongoose = require('mongoose');
let crypto = require('crypto');
let moment = require('moment');
let jwt = require('jsonwebtoken');
let fs = require('fs');
let path = require('path');

let Admin = require('../../models/admin');

let constantObj = require('../../../config/constants.js');
let commonObj = require('../../common/common');
let User = require('../../models/users');

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


exports.loginAdmmin = function(req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password cannot be blank').notEmpty();

    req.sanitize('email').normalizeEmail({
        remove_dots: false
    });

    let errors = req.validationErrors();
    console.log("error", errors);
    if (errors) {
        return res.status(400).send({
            msg: constantObj.messages.requiredParams,
            err: errors
        });
    }
    
    Admin.findOne({
        email: req.body.email,
        is_active:true,
        is_deleted:false
    }).exec(function(err, user) {

        if(!user){
            return res.status(400).send({
                msg: constantObj.messages.requiredParams,
                err: errors
            });
        }
         
        let mydata = {
                        _id: user._id,
                        email: user.email,
                        name: user.name,
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
                adminUpdateFunction(mydata._id);
                res.status(200).send({
                    token: generateToken(mydata),
                    data: mydata,
                });
            }
        });
    })
}


exports.changePassword = function(req, res){
    console.log (req.body);

    Admin.findOne({
        _id: req.body.id,
        is_active:true,
        is_deleted:false
    }).exec(function(err, user) {
        if(!user){
             return res.status(400).send({
                msg: constantObj.messages.requiredParams,
                err: errors
            });
        }

        //-check password id okay
        user.comparePassword(req.body.oldPassword, function(err, isMatch) {
            if (!isMatch) {
                return res.status(302).send({
                    msg: 'Invalid password'
                });
            } else {
                user.password = req.body.password;
                user.save(function(err) {
                    if(err){
                         return res.status(400).send({
                            msg: constantObj.messages.errorRetreivingData,
                            err: errors
                        });
                    }

                    res.status(200).send({
                            "msg": constantObj.messages.passwordChanged
                    });
                });
            }
        });
    })
}


let adminUpdateFunction = function(id){
    Admin.update({_id:id},{$set:{
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
            Admin.findOne({
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
            contentOf = constantObj.mailContent.forgotPasswordText + constantObj.adminUrl.url + '/#' + constantObj.adminUrl.forgotPostRoute + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n';

            let text = fs.readFileSync(path.join(__dirname + './../../email-template/emailer.html'), 'utf-8');
            let splitName = user.name.split(" ");
            console.log("-------", splitName[0]);
            text = text.replace("{{username}}", splitName);
            text = text.replace("{{bodyText}}", contentOf);
            // text = text.replace("{{imageUrl}}", imageUrl);

            console.log(text);
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
            Admin.findOne({
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
