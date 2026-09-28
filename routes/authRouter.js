const { Router } = require('express');
const passport = require("passport");
const authController = require('../controllers/authController');
const {validateSignUp} = require("../middleware/validation");

const authRouter = Router();

authRouter.get('/sign-up', authController.signUpGet);
authRouter.post('/sign-up', validateSignUp, authController.signUpPost);

authRouter.get('/login', authController.loginGet);
authRouter.post('/login', authController.loginPost);

authRouter.get('/logout', authController.logoutGet);
module.exports = authRouter; 