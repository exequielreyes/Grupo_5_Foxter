const fs = require('fs');
const path = require('path');
const { mainModule } = require("process");


const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req,res) => {
        res.render('products/productsList',{products});
    },

    detalleProducto: (req, res) => {
        id = req.params.id;
        let product = products.find(product => product.id == id);
        res.render("products/productDetail",{product});
    },

    editarProducto: (req , res) =>{
        id = req.params.id;
        let product = products.find(product => product.id == id);
        res.render("admin/editProduct",{product});
    },
    
    carrito: (req, res) => {
        res.render("carrito/productCart");
    }
}