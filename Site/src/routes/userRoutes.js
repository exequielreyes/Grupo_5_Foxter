const express = require('express');
const router = express.Router();
const path = require('path');
const userControllers = require('../controllers/userControllers.js');


// Formulario de registro
router.get('/register' , userControllers.register);

//Procesar el registr
router.post('/register', userControllers.processRegister);


router.get('/login' , userControllers.login);


module.exports = router;