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

            let productsFilter = products.filter(product => product.category.toLowerCase()  == category && product.sexCategory == sexCategory);

            res.render('products/productsList', { 'products': productsFilter });
        }
        else {
            category = req.params.category;
            let productsFilter = products.filter(product => product.category.toLowerCase()  == category);
            res.render('products/productsList', { 'products': productsFilter });
        }     


    },

    detalleProducto: (req, res) => {
        id = req.params.id;
        let product = products.find(product => product.id == id);
        res.render("products/productDetail", { product });
    },

    crearProducto: (req, res) => {
        res.render("admin/createProduct");
    },
    
    guardarProducto:(req,res)=>{
        if(req.file){
			let newProduct = {
				id: products[products.length - 1].id + 1,
				...req.body,
				image: req.file.filename
			};
		 	products.push(newProduct);
		
		}
		else {
			let newProduct = {
				id: products[products.length - 1].id + 1,
				...req.body,
				image: 'default-image.png'
			};
			products.push(newProduct);
		
		}
               
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect("/products")
    },

    editarProducto: (req, res) => {
        id = req.params.id;
        let productToEdit = products.find(product => product.id == id);
        res.render("admin/editProduct", { productToEdit })
    },


    actualizarProducto: (req , res) => {
        id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('../detail/'+ id);
	},

    borrarProducto: (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},

    carrito: (req, res) => {
        res.render("carrito/productCart");
    },
   
}