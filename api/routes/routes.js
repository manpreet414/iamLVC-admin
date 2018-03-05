import express from 'express';

import authenticationController from '../authentication';
import surveyController from '../controllers/SurveyController.js';


module.exports = function(app, express) {
    let router = express.Router();
    
	// authentication
	app.post('/api/register', authenticationController.register);
	app.post('/api/login', authenticationController.login);
	app.post('/api/forgotpassword', authenticationController.forgotPassword); // Forgot Password
    app.post('/api/reset/:token', authenticationController.resetPassword); // Forgot Password
    
    app.get('/api/surveytype/:type',surveyController.surveyType); // Survey Info
  	app.post('/api/addsurvey',surveyController.surveyAdd); // Survey Info
  	
    app.get('/api/myexercises/:id',surveyController.getExercises); // get Exercises
  	app.get('/api/exercise/:id',surveyController.getExercise); // get Exercise
    app.put('/api/exercise/:id',surveyController.updateExercise); // update Exercise
}