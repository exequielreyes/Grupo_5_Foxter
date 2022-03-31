const path = require("path");
const { mainModule } = require("process");
const User = require("../models/User");
const bcryptjs = require ('bcryptjs');


module.exports = {

  register: (req, res) => {
        res.render("usuario/register");
    },
    processRegister: (req,res) => {




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