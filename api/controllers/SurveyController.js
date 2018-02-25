// var async = require('async');
import Promise from 'promise';
import mongoose from 'mongoose';
import moment from 'moment';
import userQuestionaire from './../models/questionnaire.js';
import Interventions from './../models/interventions.js';
import Survey from './../models/survey.js';
import User from './../models/users.js';

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

        return saveSurvey(req,res);
        // let survey = new Survey(req.body);
        // survey.save(function(err, result) {
        //     //insert current day quotes data into user quotes collection.
        //     return res.status(200).send({
        //         error: false,
        //         msg: constantObj.messages.saveSuccessfully,
        //         "data": result
        //     })
        //  });
    }
}


const saveSurvey = async(function*(req,res) {
    let survey     = new Survey(req.body);
    let surveyType = req.body.surveyType;
    let userSurvey = req.body.userSurvey;
    let updateUser = {};
    yield survey.save();
    if(surveyType == 'surveCourse1') {
        let answers = ['yes','Yes','YES','YeS','YEs']
        let interventions = [];
        userSurvey.forEach((obj)=>{
            if(answers.indexOf(obj.answer)>=0) {
                interventions = interventions.concat(obj.interventions);
            }
        })
        interventions               = _.uniq(interventions);
        updateUser[surveyType]      = true;
        updateUser['interventions'] = interventions;
        yield User.findOneAndUpdate({"_id":req.body.useId},{$set:updateUser}) 
    } else if(surveyType == 'surveCourse2') {
        let answers = ['no','No','NO']
        let interventions = [];
        userSurvey.forEach((obj)=>{
            if(answers.indexOf(obj.answer)>=0) {
                interventions = interventions.concat(obj.interventions);
            }
        })
        interventions               = _.uniq(interventions);
        updateUser[surveyType]      = true;
        let USER = yield User.findOne({"_id":req.body.useId}) 
        interventions.concat(USER.interventions);
        updateUser['interventions'] = interventions;
        yield User.findOneAndUpdate({"_id":req.body.useId},{$set:updateUser}) 
    } else {
        updateUser[surveyType]      = true;
        yield User.findOneAndUpdate({"_id":req.body.useId},{$set:updateUser}) 
    }



    return res.status(200).send({
        error: false,
        msg: constantObj.messages.saveSuccessfully,
        "data": result
    })
})

module.exports.getExercises = function(req, res) {
    
    var query = {};
    if(req.body.interventions) interventions = JSON.parse(req.body.interventions);

    if(interventions != undefined && interventions.length > 0){
        query.interventionsId = {"$in" : interventions };    
    }
    query.is_deleted = false;
    query.is_active = true;

    Interventions.find(query, function (err, rec) {
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
    })
}