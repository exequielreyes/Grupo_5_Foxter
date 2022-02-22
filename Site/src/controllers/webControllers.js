const path = require("path");
const { mainModule } = require("process");

module.exports = {
    index: (req , res) =>{
        
        res.render(path.join(__dirname, "../views/index"), {'css':'index.css','title':'Pagina Inicial'});
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