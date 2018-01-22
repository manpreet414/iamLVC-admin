import express from 'express';

import authenticationController from '../authentication';


module.exports = function(app, express) {
    let router = express.Router();
    
	// authentication
	app.post('/api/register', authenticationController.register);
	app.post('/api/login', authenticationController.login);
	app.post('/api/logout', authenticationController.logout);
	app.get('/api/verifyEmail', authenticationController.verifyEmail);

}