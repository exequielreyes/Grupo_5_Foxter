const path = require("path");
const { mainModule } = require("process");
const User = require("../models/User");
const bcryptjs = require ('bcryptjs');
const { validationResult } = require('express-validator');

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
            return res.render('usuario/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
        }

        if (req.body.password[0] != req.body.password[1]){
            return res.render('usuario/register', {
				errors: {
					password: {
						msg: 'Las contraseñas no coinciden'
					}
				},
				oldData: req.body
			});
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
    },

    loginProcess: (req,res) => {
        let userToLogin = User.findByField('email', req.body.email );

        if (userToLogin){
            let passwordOk = bcryptjs.compareSync( req.body.password,userToLogin.password);
            if(passwordOk){
                res.send(userToLogin);
            }
            
            return res.render('usuario/login', {
            errors: {
                email: {
                    msg: 'El usuario o la contraseña no son correctas. Por favor, inténtalo de nuevo.'
                }
            }
        });

        }
        


        return res.render('usuario/login', {
			errors: {
				email: {
					msg: 'Este email no esta registrado'
				}
			}
		});

    }

  
}