const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/authController');

authRouter.post('/auth/login', authController.postLogin);
authRouter.post('/auth/signup', authController.postSignup);
authRouter.post('/auth/logout', authController.postLogout);

module.exports = authRouter;