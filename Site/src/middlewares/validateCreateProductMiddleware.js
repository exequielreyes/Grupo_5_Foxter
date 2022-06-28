const { body } = require('express-validator');
const path = require('path');

const validations= [
    body('name').notEmpty().withMessage('Debe completar este campo').bail()
    .isLength({min: 5 }).withMessage('El campo nombre debe tener al menos 5 caracteres'),

    body('description').notEmpty().withMessage('Debe completar este campo').bail()
    .isLength({min: 20 }).withMessage('El campo descripción debe tener al menos 20 caracteres'),

    body('price').notEmpty().withMessage('Debe completar este campo'),
    //.isNumeric().isLength({min: 5 }).withMessage('Debe ser mayor a 0'),

    body('image').custom((value , {req})=>{
        let files = req.files;
        let valida=false;
       
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']

        if (!files.length > 0) {
            throw new  Error(`Tienes que subir una imagén con las extensiones de archivos permitidas : ${acceptedExtensions.join(', ')}`);
           
        }else{
            files.forEach(file => {
                console.log(file);
                let fileExtension = path.extname(file.originalname);
                console.log(fileExtension);
            if (!acceptedExtensions.includes(fileExtension)) {
                 throw new Error(`Las extensiones de archivos permitidas son: ${acceptedExtensions.join(', ')}`);
                return valida;
              
            }
            
            
            });
      
            return true;
        }
        


    })
   
]
module.exports =  validations;
