import userController from './../../controllers/Admin/UserController';
import adminController from './../../controllers/Admin/AdminController';
import categoryController from './../../controllers/Admin/CategoryController';
import questionController from './../../controllers/Admin/QuestionController';
import questionnaireController from './../../controllers/Admin/QuestionnaireController';
import userquestionController from './../../controllers/Admin/UserquestionController';
import interventionController from './../../controllers/Admin/InterventionController';

import path from 'path';


module.exports = function(app, express,io) {
    var router = express.Router();
    let jwt = require('jsonwebtoken');

    app.use(function(req, res, next) {
        req.isAuthenticated = function() {
            var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
            try {
                console.log("token", token);
                return jwt.verify(token, process.env.TOKEN_SECRET);
            } catch (err) {
                return false;
            }
        };
        next();
    });
   
    // Controllers

    // Auth admin login API's
    app.post('/api/v1/login',adminController.loginAdmmin); // login
    app.post('/api/v1/forgotpassword', adminController.forgotPassword); // Forgot Password
    app.post('/api/v1/reset/:token', adminController.resetPassword); // Forgot Password
    app.post('/api/v1/admins/change-password', adminController.changePassword); // Ccoocchh change password


    // Questions module
    app.get('/api/v1/allQuestion', questionController.allQuestion);
    app.get('/api/v1/question', questionController.questions);
    app.post('/api/v1/question', questionController.addQuestion);
    app.put('/api/v1/question', questionController.updateQuestion);
    app.put('/api/v1/question/changeStatus/:id', questionController.changeStatus);
    app.get('/api/v1/question/:id/:delete', questionController.softdelete);
    app.get('/api/v1/question/:id', questionController.getQuestion);

    // survey module
    app.get('/api/v1/allQuestionnaire', questionnaireController.allQuestionnaire);
    app.get('/api/v1/questionnaire', questionnaireController.questionnaires);
    app.post('/api/v1/questionnaire', questionnaireController.addQuestionnaire);
    app.put('/api/v1/questionnaire/:id', questionnaireController.updateQuestionnaire);
    app.put('/api/v1/savequestions/:_id', questionnaireController.saveQuestionsQuestionnaire);
    app.put('/api/v1/questionnaire/changeStatus/:id', questionnaireController.changeStatus);
    app.get('/api/v1/questionnaire/:id/:delete', questionnaireController.softdelete);
    app.get('/api/v1/questionnaire/:id', questionnaireController.getQuestionnaire);

    // User-Question module
    app.get('/api/v1/userquestions', userquestionController.questions); // User-Question list
    app.get('/api/v1/allUserquestion', userquestionController.allQuestion); // User-Question list with paging
    app.put('/api/v1/userquestions/:id', userquestionController.updateUserQuestions); // get a single question according to id
    app.get('/api/v1/userquestions/:id', userquestionController.getQuestion); // get a single question according to id
    app.get('/api/v1/userquestions/edit/:id', userquestionController.updateFindQuestion); // get a single question according to id
    app.post('/api/v1/userquestions', userquestionController.addQuestion); // Add User-Question
    app.get('/api/v1/categoryquestions/:categoryId', userquestionController.getCategoryQuestions); // get all questions according to categoryId
    app.get('/api/v1/userquestionsbycategory', categoryController.getUserQuestionsByCategory);
   
    // Category module
    app.get('/api/v1/categories', categoryController.categories); // category list
    app.get('/api/v1/allCategory', categoryController.allCategory); // category list with paging
    app.post('/api/v1/categories', categoryController.addCategory); // Add category
    app.put('/api/v1/categories/:id', categoryController.updateCategory); // update category 
    app.get('/api/v1/categories/:id',categoryController.getCategory); // get a perticuler Category
    app.get('/api/v1/categories/:id/:delete',categoryController.softdelete); // Soft delete Category here from Category
    app.put('/api/v1/categories/:id', categoryController.changeStatus);

    // User module
    app.get('/api/v1/users',adminController.isAuthenticated, userController.users); // User Listing


    // Intervention module
    app.post('/api/v1/interventions', interventionController.addIntervention);  // Add Interventions

}
