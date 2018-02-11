// var async = require('async');
import Promise from 'promise';
import mongoose from 'mongoose';
import moment from 'moment';
import Category from './../../models/category.js';
import userQuestion from './../../models/userquestions.js';
const  {wrap:async} = require('co');

let constantObj = require('./../../../config/constants.js');

module.exports.categories = function(req, res) {
	Category.find({ is_deleted : false }, function (err, rec) {
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
	});
}

module.exports.getUserQuestionsByCategory = function(req, res) {
    Category.find({ is_deleted : false }).exec(function(err, rec) {
        if (err) {
            res.status(400).send({
                error: true,
                msg: constantObj.messages.errorRetreivingData,
                "err": err
            });
        } else {
//console.log("startttttttt")
return dummy(rec,req,res);
//console.log("endddddddddddd")

      } // else
    });
}

const dummy = async(function*(body,req,res) {
    let myarray = [];
    for (var i = 0; i < body.length; i++) {
        let OBJ = body[i].toObject();
        myarray.push(OBJ);
        let query = {};
                query.categoryId = body[i]._id;
            let dump = yield userQuestion.find(query);
            //console.log("sssss",i);
            body[i].toObject();
            body[i]["userquestions"] = []; 
            body[i]["userquestions"] = dump;
            myarray[i]["userquestions"] = []; 
            myarray[i]["userquestions"] = dump; 
        // rec[i]
    }
    //console.log("afterrrrrrrrr",body)
    res.status(200).send({
                            error: false,
                            data: myarray
                        });
})
module.exports.allCategory = function(req, res) {
	var myskip = 0;
	var mylimit = 10;

	if (req.body.limit) {
		mylimit = parseInt(req.body.limit);
	}

	if (req.body.page) {
		myskip = parseInt(req.body.page - 1) * mylimit;
	}

	Category.find({ is_deleted : false}, function (err, rec) {
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

module.exports.mycat = function(req, res) {
    
}


module.exports.addCategory = function(req, res) {
	// Validation of the required fields
	req.assert('name', 'Category name cannot be blank.').notEmpty();
	req.assert('is_active', 'Status cannot be blank').notEmpty();

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
		let category = new Category(req.body);
		category.save(function(err, result) {
	        //insert current day quotes data into user quotes collection.
	        return res.status(200).send({
	          	error: false,
	          	msg: constantObj.messages.saveSuccessfully,
	          	"data": result
	        })
	     });
	}
}

module.exports.getCategory = function(req, res) {
	Category.findOne({ _id:req.params.id, is_active: true }, function (err, data) {
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

exports.updateCategory = function(req, res) {

		let data = JSON.parse(JSON.stringify(req.body))
		let updateData = {
	        $set: data
	    }
	    Category.update({
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

exports.changeStatus= function(req, res){

    let id = req.params.id ;
    Category.update({
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

exports.softdelete = function(req, res) {
	
    let is_delete = req.params.delete == 'true' ? new Boolean(req.params.delete) : false ;

    let updateData = {};
        updateData = {
            $set: {
                is_deleted: is_delete
            }
        }
    
    Category.update({
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