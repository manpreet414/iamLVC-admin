let userObj = require('./../models/users.js');
let apn = require("apn");
let path = require('path');
let moment = require('moment');
let constantObj = require('../../config/constants.js');

let nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'example@example.com',
        pass: '********'
    }
});

exports.sendMail = function(to, from, subject, text, cb) {
    try{
        let mailOptions = {
        to: to,
        from: from,
        subject: subject,
        html: text
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, info);
        }
    });
    }
    catch(e){
        console.log(e);
    }
}
