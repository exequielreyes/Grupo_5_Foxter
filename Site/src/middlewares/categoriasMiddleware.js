const db = require("../database/models");

module.exports = categoriasMiddleware = (req, res, next) => {
    if (!res.locals.categorias) {
        db.Category.findAll({
        }).then(categorias => {
            res.locals.categorias = categorias;
        })
    }
    next();  

};

