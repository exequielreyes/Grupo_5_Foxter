const fs = require('fs');
const path = require('path');
const { mainModule, nextTick } = require("process");


const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req, res) => {
        res.render('products/productsList', { products });
    },
    categoriaProducto: (req, res) => {
        if (req.params.sexCategory) {
            category = req.params.category;
            sexCategory = req.params.sexCategory;

            let productsFilter = products.filter(product => product.category == category && product.sexCategory == sexCategory);

            res.render('products/productsList', { 'products': productsFilter });
        }
        else {
            category = req.params.category;
            let productsFilter = products.filter(product => product.category == category);

            res.render('products/productsList', { 'products': productsFilter });
        }


    },
    detalleProducto: (req, res) => {
        id = req.params.id;
        let product = products.find(product => product.id == id);
        res.render("products/productDetail", { product });
    },

    editarProducto: (req, res) => {
        id = req.params.id;
        let product = products.find(product => product.id == id);
        res.render("admin/editProduct", { product });
    },

    carrito: (req, res) => {
        res.render("carrito/productCart");
    },
    crearProducto: (req, res) => {
        res.render("admin/createProduct");
    },
    guardarProducto:(req,res)=>{
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            image: 'default-image.png'
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect("/products")
    }
}