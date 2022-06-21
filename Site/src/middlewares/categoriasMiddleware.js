const db = require("../database/models");

module.exports =  categoriasMiddleware = async (req, res, next) => {
    if (!res.locals.categorias) {
        await db.Category.findAll()
        .then(todascategorias => {
            res.locals.categorias = todascategorias;
        })
    }
   
    next();  

};

