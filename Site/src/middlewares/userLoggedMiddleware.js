const db = require("../database/models");
const User = require("../models/User");

module.exports = userLoggedMiddleware = (req, res, next) => {
	res.locals.isLogged = false;


    let emailInCookie = req.cookies.userEmail;

    let userCookie = User.findByField('email', emailInCookie);

    if (userCookie){
        req.session.userLogged = userCookie; //pasar el ususario a sesion
          }

    if(req.session.userLogged){
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
        }


    next();
  
};

// let email = req.cookies.remember;

// user.findOne({ 
//     attributes: [
//         'id',
//         'first_name', 
//         'last_name', 
//         'email', 
//         'phone',
//         'address',
//         'password',
//         'avatar',
//         // 'favorites'  // No implementado aún
//     ],
//     where: { email },
//     include: [category_user, product]
// })
//     .then( user => {
//         req.session.userLoggedIn = user;
//         next();
//     })
//     .catch( err => {
//         console.log('Hubo un error: ', err);    // Ver como informar a la vista.
//     });
// } else {
// next();
// }
