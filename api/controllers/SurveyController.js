// var async = require('async');
import Promise from 'promise';
import mongoose from 'mongoose';
import moment from 'moment';
import _ from 'underscore';
import userQuestionaire from './../models/questionnaire.js';
import Interventions from './../models/interventions.js';
import userInervention from './../models/userintervention.js';
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
    
    let errors = req.validationErrors();

     
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
    console.log("inside saveSurvey   ",req.body.surveyType)
    try {
        let surveyType = req.body.surveyType;
        let userSurvey = req.body.userSurvey;
        
        let survey     = new Survey(req.body);
        let updateUser = {};
        yield survey.save();
        if(surveyType == "surveyCourse1") {
            console.log("1")
            let answers = ['yes','Yes','YES','YeS','YEs']
            let interArray = [1, 2, 3, 4, 5, 7, 11, 14, 15, 18, 19, 20, 22, 27, 28, 29, 32, 33, 35, 36, 37, 38, 43, 50, 54];
            userSurvey.forEach((obj)=>{
                if(answers.indexOf(obj.answer)>=0) {
                    interArray = interArray.concat(obj.interventions);
                }
            })
            console.log("22   req.body.useId",req.body.userId);
            interArray               = _.uniq(interArray);
            updateUser[surveyType]      = true;
            let query = {};
            query.interventionsId = {"$in" : interArray },
            query.is_deleted      = false;
            query.is_active       = true;
            console.log("2.22222.1111",interArray)
            let findIntervention = yield Interventions.find(query);
            console.log("33333333-",findIntervention.length)
            if(findIntervention && findIntervention.length) {
                for (var i = 0; i < findIntervention.length; i++) {
                    
                    let usrIntr = {
                        interventionsId:findIntervention[i]._id,
                        userId:req.body.userId
                    }
                    console.log("555555555555555555555")
                    let uIngtr = yield userInervention.create(usrIntr)
                }
            }
            let check  =  yield User.findOneAndUpdate({"_id":req.body.userId},{$set:updateUser}) 
        } else if(surveyType == 'surveCourse2') {
            let answers = ['no','No','NO']
            let interArray = [];
            userSurvey.forEach((obj)=>{
                if(answers.indexOf(obj.answer)>=0) {
                    interArray = interArray.concat(obj.interventions);
                }
            })
            interArray               = _.uniq(interArray);

            updateUser[surveyType]      = true;
            let query = {};
            query.interventionsId = {"$in" : interArray },
            query.is_deleted      = false;
            query.is_active       = true;
            console.log("2.22222.1111",interArray)
            let findIntervention = yield Interventions.find(query);
            console.log("33333333-",findIntervention.length)
            if(findIntervention && findIntervention.length) {
                for (var i = 0; i < findIntervention.length; i++) {
                    
                    let usrIntr = {
                        interventionsId:findIntervention[i]._id,
                        userId:req.body.userId
                    }
                    console.log("555555555555555555555")
                    let uIngtr = yield userInervention.create(usrIntr)
                }
            }
            yield User.findOneAndUpdate({"_id":req.body.userId},{$set:updateUser}) 

        } else {
            updateUser[surveyType]      = true;
            yield User.findOneAndUpdate({"_id":req.body.userId},{$set:updateUser}) 
        }



        return res.status(200).send({
            error: false,
            msg: constantObj.messages.saveSuccessfully
        })
    } catch(e) {
        console.log("errrrrrrr",e);
    }
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