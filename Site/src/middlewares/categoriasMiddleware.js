const db = require("../database/models");

module.exports = categoriasMiddleware = (req, res, next) => {
    if (res.locals.categorias==undefined) {
        db.Category.findAll()
        .then(todascategorias => {
            res.locals.categorias = todascategorias;
        })
    }
   
    next();  

};

