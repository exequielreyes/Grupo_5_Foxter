const { body } = require('express-validator');


let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let cA = new Date(year - 18, month, day).toDateString();
    let cB = new Date(year , month, day).toDateString();
    let cC = new Date(year - 70,  month, day).toDateString();

const validations = [
    body('name')
    .notEmpty().withMessage('Tienes que escribir un nombre').bail()   
    .isLength({min: 3 }).withMessage('El campo nombre debe tener al menos 3 caracteres'),

    body('lastName')
    .notEmpty().withMessage('Tienes que escribir un apellido').bail()   
    .isLength({min: 3 }).withMessage('El campo apellido debe tener al menos 3 caracteres'),
    
    body('date')
    .notEmpty().withMessage('Tienes que elegir una fecha de nacimiento').bail()
    .isBefore(cB).withMessage('Eliga una fecha valida').bail()
    .isBefore(cA).withMessage('Tienes que ser mayor de 18 años').bail()
    .isAfter(cC).withMessage('Eres demasiado mayor'),
   

    body('email')
    .notEmpty({ignore_whitespace:true }).withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),

    body('password')
    .notEmpty({ignore_whitespace:true }).withMessage('Tienes que escribir una contraseña').bail()
    .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),


   
]

module.exports =  validations;