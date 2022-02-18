const path = require("path");

module.exports = {
    index: (req , res) =>{
        res.render(path.join(__dirname, "../views/index"));
    },

    login: (req, res) =>{
    res.render(path.join(__dirname, "../views/usuario/login"));
    },

    register: (req , res) =>{
        res.render(path.join(__dirname, "../views/usuario/register"));
    },

    carrito: (req , res) =>{
        res.render(path.join(__dirname, "../views/carrito/productCart"));

    },
    detalleProducto: (req , res) =>{
        res.render(path.join(__dirname, "../views/products/productDetail"));
    }
}