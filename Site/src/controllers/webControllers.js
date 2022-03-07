const path = require("path");
const { mainModule } = require("process");

module.exports = {
    index: (req, res) => {

        res.render("index");
    },
    
    login: (req, res) => {
        res.render('usuario/login');
    },

    register: (req, res) => {
        res.render("usuario/register");
    },

    carrito: (req, res) => {
        res.render("carrito/productCart");

    },
    detalleProducto: (req, res) => {
        res.render("products/productDetail");
    },

    editarProducto: (req , res) =>{
        res.render("admin/editProduct" , { 'css': 'editProduct.css', 'title': 'Edit Product' });
    }

}