const fs = require('fs');
const path = require('path');
const {validationResult, body}=require('express-validator');
const { mainModule, nextTick } = require("process");
const db = require('../database/models');
// const sequelize = db.sequelize;



const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req, res) => {
        
        db.Product.findAll()
        .then(products => {
            res.render('products/productsList', { products });
        })

        // res.render('products/productsList', { products });
    },

    categoriaProducto: (req, res) => {
        if (req.params.sexCategory) {
            category = req.params.category;
            sexCategory = req.params.sexCategory;

            let productsFilter = products.filter(product => product.category.toLowerCase()  == category.toLowerCase()  && product.sexCategory.toLowerCase()  == sexCategory.toLowerCase() );

            res.render('products/productsList', { 'products': productsFilter, 'category':category, 'categorySex':sexCategory });
        }
        else {
            category = req.params.category;
            let productsFilter = products.filter(product => product.category.toLowerCase() == category.toLowerCase());

            res.render('products/productsList', { 'products': productsFilter, 'category':category });
        }


    },

    detalleProducto: (req, res) => {

        db.Product.findByPk(req.params.id)
        
        .then(product => {
            res.render("products/productDetail", { product })
        })


        // id = req.params.id;
        // let product = products.find(product => product.id == id);
        // res.render("products/productDetail", { product });
    },

    crearProducto: (req, res) => {
        let categorias = db.Category.findAll();
        let sexCategorias = db.sexCategory.findAll()
        let saleCategorias = db.saleCategory.findAll()
        let sizes = db.Size.findAll()
        Promise.all([categorias,sexCategorias,saleCategorias,sizes])
        .then(([categorias, sexCategorias, saleCategorias,sizes]) => {
            res.render('admin/createProduct', {categorias, sexCategorias, saleCategorias,sizes})
        })
       
    },
    
    guardarProducto:(req,res)=>{
       /*  let resul=validationResult(req);
        //return  res.send(resul.errors);
        if(resul.errors){
          // return  res.send(resul.mapped())
         res.render('admin/createProduct',{errors:resul.mapped(), oldData:req.body });
         }
        else{ */
            db.Product.create({
                name: req.body.name,
                price: req.body.price,
                discount:  req.body.discount,
                idCategory: req.body.category ,
                description: req.body.category,
                idSexCategory: req.body.sexCategory,
                idSaleCategory: req.body.saleCategory,
                images:[
                    {
                    name:req.file.filename
                    }
                ],
               
                },{
                    include: [{
                      association:"images"}
                    ]

            }).then(product=>{
                product.addSize([1,2,3])
                res.send(product);
            })
           // res.redirect("/products")
       // }
          
       /*  if(req.file){
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
               
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null , ' '));
		res.redirect("/products")} */
    },

    editarProducto: (req, res) => {
        id = req.params.id;
        let productToEdit = products.find(product => product.id == id);
        res.render("admin/editProduct", { productToEdit })
    },


    actualizarProducto: (req , res) => {
        id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
    if(req.file){
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: req.file.filename
		};
    }else{
        productToEdit = {
			id: productToEdit.id,
			...req.body,
			// image: req.body.image
		};
    }
    
   
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