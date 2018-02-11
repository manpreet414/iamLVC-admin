import async from 'async';
import mongoose from 'mongoose';
import moment from 'moment';
import Question from './../../models/questions.js';
let constantObj = require('./../../../config/constants.js');

module.exports.addQuestion = function(req, res) {
	// Validation of the required fields
	console.log (req.body);
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
		let question = new Question(req.body);
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
	Question.find({ is_active: true }, function (err, data) {
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
	Question.findOne({ _id:req.params.id, is_active: true }, function (err, data) {
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


module.exports.allQuestion = function(req, res) {
	//var mysort = { _id: 1 };
	var myskip = 0;
	var mylimit = 10;

	if (req.query.count) {
		mylimit = parseInt(req.body.count);
	}

	if (req.body.page) {
		myskip = parseInt(req.body.page - 1) * mylimit;
	}

	Question.find({ is_deleted: false, }, function (err, data) {
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
                data: data
            });
        }
	}).skip(myskip).limit(mylimit);
}

exports.changeStatus= function(req, res){

    let id = req.params.id ;
    Question.update({
        _id: id
    }, req.body, function(err, data) {
        if (err) {
            res.status(400).send({
                "msg": constantObj.messages.userStatusUpdateFailure,
                "err": err
            });
        } else {
            res.status(200).send({
                "msg": constantObj.messages.userStatusUpdateSuccess,
                "data": data
            })
        }
    });
}


exports.updateQuestion = function(req, res) {
	// Validation of the required fields
	//req.assert('_id', '_id cannot be blank').notEmpty();
	//req.assert('question', 'Question cannot be blank.').notEmpty();
	//req.assert('status', 'Status cannot be blank').notEmpty();

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
		let data = JSON.parse(JSON.stringify(req.body))
		let updateData = {
	        $set: data
	    }
	    Question.update({
	        _id: req.body._id
	    }, updateData, function(err, data) {
	        if (err) {
	            res.status(400).send({
	            	error: true,
	                msg: constantObj.messages.userStatusUpdateFailure,
	                "err": err
	            });
	        } else {
	            res.status(200).send({
	            	error: false,
	                msg: constantObj.messages.userStatusUpdateSuccess,
	                data: data
	            });
	        }
	    });
	}
}

exports.softdelete = function(req, res) {
	
    
    let is_delete = req.params.delete == 'true' ? new Boolean(req.params.delete) : false ;

    let updateData = {};
        updateData = {
            $set: {
                is_deleted: is_delete
            }
        }
    
    Question.update({
        _id: req.params.id,
    }, updateData, function(err, data) {
        if (err) {
            res.status(400).send({
                "msg": constantObj.messages.userStatusUpdateFailure,
                "err": err
            });
        } else {
            res.status(200).send({
                "msg": constantObj.messages.userStatusUpdateSuccess,
                "data": data
            })
        }
    })
}


exports.deleteQuestion = function(req, res) {
	// Validation of the required fields
	req.assert('_id', '_id cannot be blank').notEmpty();

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
		let updateData = {
	        $set: {is_deleted: true}
	    }
	    
	    Question.update({
	        _id: req.body._id
	    }, updateData, function(err, data) {
	        if (err) {
	            res.status(400).send({
	            	error: true,
	                msg: constantObj.messages.deleteFailure,
	                "err": err
	            });
	        } else {
	            res.status(200).send({
	            	error: false,
	                msg: constantObj.messages.userDeleteSuccess,
	                data: data
	            });
	        }
	    });
	}
}