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
    }
}


const saveSurvey = async(function*(req,res) {
    try {
        let surveyType = req.body.surveyType;
        let userSurvey = req.body.userSurvey;
        
        let survey     = new Survey(req.body);
        yield survey.save();
        if(surveyType == "surveyCourse1") {
            let answers = ['yes','Yes','YES','YeS','YEs']
            let interArray = [1, 2, 3, 4, 5, 7, 11, 14, 15, 18, 19, 20, 22, 27, 28, 29, 32, 33, 35, 36, 37, 38, 43, 51, 55];
            userSurvey.forEach((obj)=>{
                if(answers.indexOf(obj.answer)>=0) {
                    interArray = interArray.concat(obj.interventions);
                }
            })

            interArray               = _.uniq(interArray);
            let query = {};
            query.interventionsId = {"$in" : interArray },
            query.is_deleted      = false;
            query.is_active       = true;
            
            let findIntervention = yield Interventions.find(query);
            
            if(findIntervention && findIntervention.length) {
                for (var i = 0; i < findIntervention.length; i++) {
                    
                    let usrIntr = {
                        interventionsId:findIntervention[i]._id,
                        userId:req.body.userId,
                        interventionCode:findIntervention[i].interventionsId
                    }
                    let uIngtr = yield userInervention.create(usrIntr)
                }
            }
        } else if(surveyType == 'surveCourse2') {
            let answers = ['no','No','NO']
            let interArray = [];
            userSurvey.forEach((obj)=>{
                if(answers.indexOf(obj.answer)>=0) {
                    interArray = interArray.concat(obj.interventions);
                }
            })
            interArray               = _.uniq(interArray);

            let query = {};
            query.interventionsId = {"$in" : interArray },
            query.is_deleted      = false;
            query.is_active       = true;
            
            let findIntervention = yield Interventions.find(query);
            
            if(findIntervention && findIntervention.length) {
                for (var i = 0; i < findIntervention.length; i++) {
                    
                    let usrIntr = {
                        interventionsId:findIntervention[i]._id,
                        userId:req.body.userId,
                        interventionCode:findIntervention[i].interventionsId
                    }
                    let uIngtr = yield userInervention.create(usrIntr)
                }
            }

        }
        
        let updateUser = {};
        updateUser[surveyType]      = true;
        yield User.findOneAndUpdate({"_id":req.body.userId},{$set:updateUser})



        return res.status(200).send({
            error: false,
            msg: constantObj.messages.saveSuccessfully
        })
    } catch(e) {
        console.log("error",e);
    }
})

module.exports.getExercises = function(req, res) {
    var query = {
        is_deleted:false,
        is_active:true,
        userId:req.params.id
    };

    userInervention.find(query).populate('interventionsId').sort('interventionCode').exec(function (err, rec) {
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

module.exports.getExercise = function(req, res) {
    var query = {
        is_deleted:false,
        is_active:true,
        _id:req.params.id
    };

    userInervention.findOne(query).populate('interventionsId').exec(function (err, rec) {
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



module.exports.updateExercise = function(req, res) {
    let query = {
        _id:req.params.id
    };
    let updateData = {
        submittedExercise:req.body.interventionsId,
        is_submitted:true,
        submittedAt:new Date(),
        updatedAt:new Date()
    }
    userInervention.findOneAndUpdate(query,{$set:updateData}).exec(function (err, rec) {
        if (err) {
            res.status(400).send({
                error: true,
                msg: constantObj.messages.errorRetreivingData,
                "err": err
            });
        } else {
            res.status(200).send({
                error: false,
                msg: "Exercise Successfully submitted.",
                data: rec
            });
        }
    })
}




module.exports.getProgress = function(req, res) {
    var query = {
        is_deleted:false,
        is_active:true,
        surveyType: "prePostSurvey",
        userId:req.params.id
    };

    Survey.find(query).sort('createdAt').exec(function (err, rec) {
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