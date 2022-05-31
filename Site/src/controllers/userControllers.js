const path = require("path");
const { mainModule } = require("process");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../database/models');


module.exports = {
  register: (req, res) => {
    res.render("usuario/register");
  },









  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      res.render("usuario/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    //validacion

    // let userInDB = User.findByField("email", req.body.email);
    // let userInDB = db.User.findAll({ 
    //   where: {
    //     email: req.body.email
    //   }
    // });
    
    let userInDB = db.User.findOne({
      where: {
        email: req.body.email
      }
    });
    let userToCreate = db.User.create({
      name: req.body.name,
      lastName: req.body.lastName,
      date: req.body.date,
      password: bcryptjs.hashSync(req.body.password, 10),
      email: req.body.email,
      remember: req.body.recordame,
    })
    Promise.all([userInDB, userToCreate])
    .then(([userInDB, userToCreate]) => {
          if (userInDB) {
                        return res.render("usuario/register", {
                          errors: {
                            email: {
                              msg: "Este email ya está registrado",
                            },
                          },
                          oldData: req.body,
                        });
                      }

                      if (req.body.password != req.body.repassword) {
                        return res.render("usuario/register", {
                          errors: {
                            password: {
                              msg: "Las contraseñas no coinciden",
                            },
                          },
                          oldData: req.body,
                        });
                      } 
                      
                      userToCreate;
                      
              // let userToCreate = {
              //   ...req.body,
              //   password: bcryptjs.hashSync(req.body.password[0], 10),
              // };

              // let userCreated = User.create(userToCreate);

             return res.redirect("/");
    })


          
   
  

   
  },





















  login: (req, res) => {
    res.render("usuario/login");
  },

  loginProcess: (req, res) => {
    // console.log("req.body.password", req.body.password)
    let userToLogin = User.findByField("email", req.body.email);
    // console.log("userToLogin" , userToLogin);
    if (userToLogin) {
     
      let passwordOk = bcryptjs.compareSync(req.body.password,userToLogin.password);
    
      if (passwordOk ==  true) {
        // delete userToLogin.password[0]; //Para no tener la contrasena en ssesion, es por seguridad
        req.session.userLogged = userToLogin;


        if (req.body.recordame){
          res.cookie('userEmail', req.body.email, {maxAge: 1000 * 60  })
        }


       return res.redirect("./profile");
      }

      return res.render("usuario/login", {
        errors: {
          email: {
            msg: "El usuario o la contraseña no son correctas. Por favor, inténtalo de nuevo.",
          },
        },
      });
    }

    return res.render("usuario/login", {
      errors: {
        email: {
          msg: "Este email no esta registrado",
        },
      },
    });
  },

  profile: (req, res) => {
    res.render("usuario/profile", {user: req.session.userLogged});
  },

  logout: (req,res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  }
};
