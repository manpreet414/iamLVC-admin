// var async = require('async');
import Promise from 'promise';
import mongoose from 'mongoose';
import moment from 'moment';
import userQuestionaire from './../models/questionnaire.js';

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