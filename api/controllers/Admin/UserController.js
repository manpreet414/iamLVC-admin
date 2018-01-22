import async from 'async';
import mongoose from 'mongoose';
import moment from 'moment';
import User from './../../models/users.js';

let constantObj = require('../../../config/constants.js');

//ObjectId = mongoose.ObjectID;

module.exports.users = function(req, res) {
	var myskip = 0;
	var mylimit = 10;

	if (req.body.limit) {
		mylimit = parseInt(req.body.limit);
	}

	if (req.body.page) {
		myskip = parseInt(req.body.page - 1) * mylimit;
	}

	User.find({ is_deleted : false}, function (err, rec) {
		if (err) {
            res.status(400).send({
            	error: true,
                msg: constantObj.messages.errorRetreivingData,
                "err": err
            });
        } else {
            res.status(200).send({
            	error: false,
                msg: constantObj.messages.successRetreivingData,
                data: rec
            });
        }
	}).skip(myskip).limit(mylimit);
}
