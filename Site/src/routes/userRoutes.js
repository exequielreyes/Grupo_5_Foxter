const express = require('express');
const router = express.Router();
const path = require('path');
const userControllers = require('../controllers/userControllers.js');
const validations = require('../middleware/validateRegisterMiddleware.js');

//Formulario de registro
router.get('/register' , userControllers.register);

//Procesar el registro
router.post('/register', validations , userControllers.processRegister);

//Formulario Login
router.get('/login' , userControllers.login);

//Procesar el login
router.post('/login', userControllers.loginProcess);



module.exports = router;