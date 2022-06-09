const { body } = require('express-validator');

const validations= [
    body('name').notEmpty().withMessage('debe completar este campo').bail()
    .isLength({min: 5 }).withMessage('El campo nombre debe tener al menos 5 caracteres'),

    body('description').notEmpty().withMessage('debe completar este campo').bail()
    .isLength({min: 20 }).withMessage('El campo descripcion debe tener al menos 20 caracteres'),

    body('price').notEmpty().withMessage('debe completar este campo').bail()
    .isNumeric().isLength({min: 20 }).withMessage('Debe ser mayor a 0'),


   
]
module.exports =  validations;
