// var async = require('async');
import Promise from 'promise';
import mongoose from 'mongoose';
import moment from 'moment';
import Interventions from './../../models/interventions.js';
import userQuestion from './../../models/userquestions.js';
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
console.log("req.body",req.body)
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