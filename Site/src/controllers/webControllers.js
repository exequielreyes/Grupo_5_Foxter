const path = require("path");
const { mainModule } = require("process");

module.exports = {
    index: (req , res) =>{
        
        res.render(path.join(__dirname, "../views/index"), {'css':'index.css','title':'Home'});
    },

    login: (req, res) =>{
    res.render(path.join(__dirname, "../views/usuario/login") , {'css':'login.css','title':'Login'});
    },

    register: (req , res) =>{
        res.render(path.join(__dirname, "../views/usuario/register") , {'css':'register.css','title':'Register'});
    },

    carrito: (req , res) =>{
        res.render(path.join(__dirname, "../views/carrito/productCart") , {'css':'productCart.css','title':'Cart'});

    },
    detalleProducto: (req , res) =>{
        res.render(path.join(__dirname, "../views/products/productDetail") ,  {'css':'productCart.css','title':'Detail'});
    }
}