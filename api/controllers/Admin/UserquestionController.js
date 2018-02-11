import async from 'async';
import mongoose from 'mongoose';
import moment from 'moment';
import userQuestion from './../../models/userquestions.js';
let constantObj = require('./../../../config/constants.js');


module.exports.addQuestion = function(req, res) {
	// Validation of the required fields
	req.assert('question', 'Question cannot be blank.').notEmpty();
	// To show error if not validate fields
	let errors = req.validationErrors();
	console.log("error", errors);
	if (errors) {
	    return res.status(400).send({
	      	error: true,
	      	msg: constantObj.messages.requiredParams,
	      	err: errors
	    });
	} else {
		let question = new userQuestion(req.body);
		question.save(function(err, result) {
	        //insert current day quotes data into user quotes collection.

                    return res.status(200).send({
        	          	error: false,
        	          	msg: constantObj.messages.saveSuccessfully,
        	          	"data": result
        	        })

	    });
	}
}


module.exports.questions = function(req, res) {
	userQuestion.find({ is_deleted : false  }, function (err, data) {
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

module.exports.getUserQuestionsByCategory = function(req, res) {
    
    userQuestion.find({ is_active: true }, function (err, data) {
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

module.exports.getQuestion = function(req, res) {
	 userQuestion.findOne({
        _id: req.params.id
    }).populate('categoryId').exec(function(err, data) {
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

module.exports.updateFindQuestion = function(req, res) {
    userQuestion.findOne({
        _id: req.params.id
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

module.exports.allQuestion = function(req, res) {
	var myskip = 0;
	var mylimit = 10;

	if (req.body.limit) {
		mylimit = parseInt(req.body.limit);
	}

	if (req.body.page) {
		myskip = parseInt(req.body.page - 1) * mylimit;
	}

	userQuestion.find( { is_deleted : false} ).populate("categoryId").skip(myskip).limit(mylimit).then(function(rec) {
            res.status(200).send({
            	error: false,
                msg: constantObj.messages.successRetreivingData,
                data: rec
            });
	});
}


exports.updateUserQuestions = function(req, res) {

        let data = JSON.parse(JSON.stringify(req.body))
        let updateData = {
            $set: data
        }
        userQuestion.update({
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



module.exports.getCategoryQuestions = function(req, res) {
	console.log ("Successfully Executed!",req.params.categoryId);
	userQuestion.find({ categoryId:req.params.categoryId, is_deleted: false }, function (err, data) {
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