const path = require("path");
const { mainModule } = require("process");

module.exports = {
    index: (req, res) => {
        res.render("index");
    },
    carrito: (req, res) => {
        res.render("carrito/productCart");
    }
}