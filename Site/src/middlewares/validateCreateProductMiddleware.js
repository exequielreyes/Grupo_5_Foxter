const { body } = require('express-validator');

const validations= [
    body('name').notEmpty().withMessage('debe completar este campo'),
    body('price').notEmpty().withMessage('debe completar este campo'),
   
]
module.exports =  validations;
