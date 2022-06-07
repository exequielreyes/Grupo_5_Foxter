const db = require("../database/models");

module.exports = userLoggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false;
    let emailInCookie = req.cookies.userEmail;
   // console.log("sesion " + req.session.userLogged + " cokier " + emailInCookie)
    if (emailInCookie && req.session.userLogged == undefined) {
        console.log("entro");
        db.User.findOne({
            where: {
                email: emailInCookie
            }
        }).then(userCookie => {
            console.log("aqui" + userCookie);
            if (userCookie) {
                res.locals.isLogged = true;
                req.session.userLogged = userCookie; 
                res.locals.userLogged = req.session.userLogged;
                if(userCookie.rol=="admin"){
                    res.locals.rol=true;
                }
            }
           

        })
    }
    else{
        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
            console.log(res.locals.userLogged);
            if(res.locals.userLogged.rol=="admin"){
                res.locals.rol=true;
            }
        }
        else{
            res.locals.isLogged = false;
        }
    
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
