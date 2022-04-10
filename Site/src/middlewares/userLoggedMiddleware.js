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