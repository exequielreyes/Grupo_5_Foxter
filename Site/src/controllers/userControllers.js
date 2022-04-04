const path = require("path");
const { mainModule } = require("process");
const User = require("../models/User");
const bcryptjs = require ('bcryptjs');
const { validationResult } = require('express-validator')

module.exports = {

  register: (req, res) => {
        res.render("usuario/register");
    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            res.render("usuario/register" , {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }


        //validacion


        let userInDB = User.findByField('email',req.body.email);

        if (userInDB){
            res.send('el usuario ya esta registrado'); // agregar validaciones oldData y todo eso
        }

        if (req.body.password[0] != req.body.password[1]){
            res.send('las contrasenas no coinciden'); // agregar validaciones oldData y todo eso 
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password[0], 10),
        }

        let userCreated = User.create(userToCreate);

        res.redirect('/');
    },

    login: (req, res) => {
        res.render('usuario/login');
    }

  
}