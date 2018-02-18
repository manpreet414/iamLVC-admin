// var async = require('async');
import Promise from 'promise';
import mongoose from 'mongoose';
import moment from 'moment';
import userQuestionaire from './../models/questionnaire.js';
import Survey from './../models/survey.js';

const  {wrap:async} = require('co');

let constantObj = require('./../../config/constants.js');

module.exports.surveyType = function(req, res) {
	userQuestionaire.findOne({
        surveyType: req.params.type    
    }).exec(function(err, data) {
        if (err) {
            res.status(400).send({
                msg: constantObj.messages.errorRetreivingData,
                "err": err
            });
        } else {
            res.status(200).send({
                msg: constantObj.messages.successRetreivingData,
                data: data
            });
        }
    })
}

module.exports.surveyAdd = function(req, res) {

    console.log("testojg",req.body);
    
    let errors = req.validationErrors();

    console.log("errors",errors)
    
    if (errors) {
        return res.status(400).send({
            error: true,
            msg: constantObj.messages.requiredParams,
            err: errors
        });
    } else {
        let survey = new Survey(req.body);
        survey.save(function(err, result) {
            //insert current day quotes data into user quotes collection.
            return res.status(200).send({
                error: false,
                msg: constantObj.messages.saveSuccessfully,
                "data": result
            })
         });
    }
}