module.exports = authMiddleware = (req, res, next) => {
	if (!req.session.userLogged) { //Si no tengo a nadie en sesion
		res.redirect('./login')
	}
	next();
};