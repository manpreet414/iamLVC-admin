import userController from './../../controllers/Admin/UserController';
import adminController from './../../controllers/Admin/AdminController';
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


    // User module
    app.get('/api/v1/users',adminController.isAuthenticated, userController.users); // User Listing

}
