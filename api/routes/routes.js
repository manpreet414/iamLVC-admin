import express from 'express';

import authenticationController from '../authentication';


module.exports = function(app, express) {
    let router = express.Router();
    
	// authentication
	app.post('/api/register', authenticationController.register);
	app.post('/api/login', authenticationController.login);
	app.post('/api/forgotpassword', authenticationController.forgotPassword); // Forgot Password
    app.post('/api/reset/:token', authenticationController.resetPassword); // Forgot Password
    
}