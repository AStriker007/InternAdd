const express = require('express');
const Cred=require('../models/login_cred');
const authController = require('../controllers/auth');
const  router = express.Router();
router.post('/signup',authController.postSignup);
router.post('/login',authController.postLogin);

module.exports = router;