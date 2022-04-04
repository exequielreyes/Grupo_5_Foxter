const express = require('express');
const router = express.Router();
const path = require('path');
const userControllers = require('../controllers/userControllers.js');

const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre')   ,
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('date').notEmpty().withMessage('Tienes que elegir una fecha de nacimiento'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
  


]

// Formulario de registro
router.get('/register' , userControllers.register);


//Procesar el registro
router.post('/register', validations , userControllers.processRegister);


router.get('/login' , userControllers.login);


module.exports = router;