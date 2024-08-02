const { signup,  signin } = require('../Controllers/AuthController');
const { signupValidation,  signinValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/signup', signupValidation, signup);

router.post('/signin', signinValidation, signin);

module.exports = router;