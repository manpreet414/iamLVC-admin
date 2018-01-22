import passport from 'passport';
import mongoose from 'mongoose';
import moment from 'moment';
import User from './models/users.js';

let constantObj = require('./common/constants.js');


module.exports.register = function(req, res) {
    // Validation of the required fields
    req.assert('firstName', 'First name cannot be blank.').notEmpty();
    req.assert('lastName', 'Last name cannot be blank.').notEmpty();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();
    req.assert('gender', 'Gender cannot be blank.').notEmpty();

    // To show error if not validate fields
    let error = req.validationErrors();
    if (error) {
        return res.status(400).send({
            error: true,
            msg: constantObj.messages.requiredParams,
            err: error
        });
    }

    let userObj = req.body;

    User.findOne({ email: userObj.email }, function (err, rec) {
        if(rec) {
            return res.status(200).send({
                error: true,
                msg: constantObj.messages.emailAlreadyExist,
            })
        } else {
            //console.log(userObj, "userObj");

            //Store password in a variable
            let password = userObj.password;
            //Remove password key from requested object
            delete userObj.password;


            let user = new User(userObj);
            //Set user password
            user.setPassword(password);
           
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


module.exports.login = function(req, res) {
    passport.authenticate('local', function(err, user, info){
        // If Passport throws/catches an error
        if (err) {
            return res.status(404).send({
                error: true,
                err: err
            })
        }

        // If a user is found
        if(user){
            return res.status(200).send({
                error: false,
                user: user
            });
        } else if (info.status == -1) {
            // If user is not found
            return res.status(404).send({
                error: true,
                err: info
            });
        } else if (info.status == -2) {
            // if crediantials are wrong
            return res.status(401).send({
                error: true,
                err: info
            });
        }
    })(req, res);
};


//Logout the user
module.exports.logout = function (req,res) {
    req.logout();
    res.status(200).json({logout: true});;
}


module.exports.verifyEmail = function(req, res) {
    if (req.query.email) {
        User.findOne({ email: req.query.email }, function (err, rec) {
            if(rec) {
                return res.status(403).send({
                    error: true,
                    msg: constantObj.messages.emailAlreadyExist,
                })
            } else {
                return res.status(200).send({
                    error: false,
                    msg: 'Done'
                });
            }
        });
    } else {
        return res.status(403).send({
            error: true,
            msg: 'Email cannot be blank'
        })
    }
}