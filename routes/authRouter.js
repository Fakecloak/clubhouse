const { Router } = require('express');
const authController = require('../controllers/authController');
const {validateSignUp} = require("../middleware/validation");

const authRouter = Router();

authRouter.get('/sign-up', authController.signUpGet);
authRouter.post('/sign-up', validateSignUp, authController.signUpPost);

authRouter.get('/login', authController.loginGet);


module.exports = authRouter; 