// var async = require('async');
import Promise from 'promise';
import mongoose from 'mongoose';
import moment from 'moment';
import Interventions from './../../models/interventions.js';
const  {wrap:async} = require('co');

let constantObj = require('./../../../config/constants.js');

module.exports.addIntervention = function(req, res) {
	// To show error if not validate fields
	let errors = req.validationErrors();

	if (errors) {
	    return res.status(400).send({
	      	error: true,
	      	msg: constantObj.messages.requiredParams,
	      	err: errors
	    });
	} else {
		let interventions = new Interventions(req.body);

        Interventions.find({ interventionsId : req.body.interventionsId }, function (err, rec) {
            console.log("rec",rec,err)
            if (rec.length > 0) {
                res.status(400).send({
                    error: true,
                    msg: constantObj.messages.interventionAlreadyAdded,
                    "err": err
                });
            } else {
                interventions.save(function(err, result) {
                    //insert intervention data to database.
                    return res.status(200).send({
                        error: false,
                        msg: constantObj.messages.saveSuccessfully,
                        "data": result
                    })
                });
            }
        });
    }
}

module.exports.allIntervention = function(req, res) {
    var myskip = 0;
    var mylimit = 10;

    if (req.query.count) {
        mylimit = parseInt(req.body.count);
    }

    if (req.body.page) {
        myskip = parseInt(req.body.page - 1) * mylimit;
    }

    Interventions.find({ is_deleted : false}, function (err, rec) {
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


module.exports.Intervention = function(req, res) {
    Interventions.findOne({ _id:req.params.id, is_active: true }, function (err, data) {
        if (err) {
            res.status(400).send({
                error: true,
                msg: constantObj.messages.errorRetreivingData,
                "err": err
            });
        } else {
            res.status(200).send({
                error: false,
                data: data
            });
        }
    });
}

exports.updateIntervention = function(req, res) {

        let data = JSON.parse(JSON.stringify(req.body))
        let updateData = {
            $set: data
        }
        Interventions.update({
            _id: req.body._id
        }, updateData, function(err, data) {
            if (err) {
                res.status(400).send({
                    msg: constantObj.messages.userStatusUpdateFailure,
                    "err": err
                });
            } else {
                res.status(200).send({
                    msg: constantObj.messages.userStatusUpdateSuccess,
                    data: data
                });
            }
        });
}
