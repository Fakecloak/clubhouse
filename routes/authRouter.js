const { Router } = require('express');
const authController = require('../controllers/authController');

const authRouter = Router();

authRouter.get('/sign-up', authController.signUpGet);

module.exports = authRouter; 