const path = require("path");
const { mainModule } = require("process");

module.exports = {
    index: (req, res) => {

        res.render("index", { 'css': 'index.css', 'title': 'Home' });
    },

    login: (req, res) => {
        res.render('usuario/login', { 'css': 'login.css', 'title': 'Login' });
    },

    register: (req, res) => {
        res.render("usuario/register", { 'css': 'register.css', 'title': 'Register' });
    },

    carrito: (req, res) => {
        res.render("carrito/productCart", { 'css': 'productCart.css', 'title': 'Cart' });

    },
    detalleProducto: (req, res) => {
        res.render("products/productDetail", { 'css': 'productCart.css', 'title': 'Detail' });
    }
}