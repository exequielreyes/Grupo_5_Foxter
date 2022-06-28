const fs = require('fs');
const path = require('path');
const {validationResult, body}=require('express-validator');
const { mainModule, nextTick } = require("process");
const db = require('../database/models');
// const { defaultValueSchemable } = require('sequelize/types/utils');
// const {Category } = require('../database/models');


const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req, res) => {
        
        let pageAsnumber = Number.parseInt(req.query.page);
        let size = 6;
        let page = 0;
        if (pageAsnumber && pageAsnumber > 0)
            page = pageAsnumber - 1
        let totalProducts = db.Product.count()
        let products = db.Product.findAll(
            {
                limit: size,
                offset: page * size,
                order: [
                    ["idProduct", "DESC"]
                ],
                include: [{ association: "images" }]

            }
        )
           
        Promise.all([totalProducts, products])
            .then(([totalProducts, products]) => {
                res.render('products/productsList', { products, totalProducts, totalPages: Math.round(totalProducts / size), pageActive: page });
            })

    },

    categoriaProducto: (req, res) => {
        let pageAsnumber = Number.parseInt(req.query.page);
        let size = 6;
        let page = 0;
        if (pageAsnumber && pageAsnumber > 0)
            page = pageAsnumber - 1
        if (req.params.sexCategory) {
            category = req.params.category;
            sexCategory = req.params.sexCategory;
            let totalProducts = db.Product.count({
                include: [{ association: "category" }, { association: "sexCategory" }],
                where: {
                    '$category.name$': category,
                    '$sexCategory.name$': sexCategory,
                },
            }
            )
            let productsFilter = db.Product.findAll(
                {

                    order: [
                        ["idProduct", "DESC"]
                    ],
                    include: [{ association: "images" },
                    {
                        association: "category", where: {
                            '$category.name$': category
                        }
                    },
                    {
                        association: "sexCategory", where: {
                            '$sexCategory.name$': sexCategory,
                        }
                    }
                    ],

                }
            )
            Promise.all([totalProducts, productsFilter])
                .then(([totalProducts, productsFilter]) => {
                res.render('products/productsList', { 'products': productsFilter, 'category': category, 'categorySex': sexCategory, totalProducts, totalPages: Math.round(totalProducts / size), pageActive: page });

            })

        }
        else {
            category = req.params.category;
            let totalProducts = db.Product.count({
                include: [{ association: "category" }],
                where: {
                    '$category.name$': category,
                },
            }
            )

            let productsFilter = db.Product.findAll(
                {
                    limit: size,
                    offset: page * size,
                    where: {
                        '$category.name$': category,
                    },
                    include: [{ association: "images" }, {
                        association: "category", where: {
                            '$category.name$': category,
                        }
                    },],
                    order: [
                        ["idProduct", "DESC"]
                    ],
                }
            )
            Promise.all([productsFilter, totalProducts])
                .then(([productsFilter, totalProducts]) => {
                    res.render('products/productsList', { 'products': productsFilter, 'category': category, totalProducts, totalPages: Math.round(totalProducts / size), pageActive: page });
                })
        }
    },

    detalleProducto: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: "category"},{association: "sexCategory"},{association: "images"}, {association: "sizes"}]
        }).then(product => {
            res.render("products/productDetail", { product })
        })
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
        let resultValidation=validationResult(req);
       // return  res.send(resultValidation.errors);
        if(resultValidation.errors.length > 0){
            let categorias = db.Category.findAll();
            let sexCategorias = db.sexCategory.findAll()
            let saleCategorias = db.saleCategory.findAll()
            let sizes = db.Size.findAll()
            Promise.all([categorias,sexCategorias,saleCategorias,sizes])
            .then(([categorias, sexCategorias, saleCategorias,sizes]) => {
                res.render('admin/createProduct', {categorias, sexCategorias, saleCategorias,sizes,errors:resultValidation.mapped(), oldData:req.body})
            })
         }
        else{ 
            let images=[]
           for (i in req.files) {images.push({'name':req.files[i].filename}) }
          db.Product.create({
                name: req.body.name,
                price: req.body.price,
                discount:  req.body.discount,
                idCategory: req.body.category ,
                description: req.body.description,
                idSexCategory: req.body.sexCategory,
                idSaleCategory: req.body.saleCategory,
                images:images,
               
                },{
                    include: [{
                      association:"images"}
                    ]

            }).then(product=>{
                product.addSize(req.body.size)
                //res.send(product);
                res.redirect("/products")

            })
        }
          
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
        // let productToEdit = products.find(product => product.id == id);

        let sizes = db.Size.findAll();
        let categorias = db.Category.findAll();
        let sexCategorias = db.sexCategory.findAll()
        let saleCategorias = db.saleCategory.findAll()
        let productToEdit = db.Product.findByPk(req.params.id ,{
                include: [{association: "category"},{association: "sexCategory"}, {association: "saleCategory"}]});
        Promise.all([sizes, categorias, sexCategorias, saleCategorias,productToEdit ])
        .then(([sizes ,categorias , sexCategorias,saleCategorias ,productToEdit  ]) => {
            res.render('admin/editProduct', {sizes ,categorias, sexCategorias,saleCategorias, productToEdit})
        })

    },


    actualizarProducto: (req , res) => {
        let images=[]
        for (i in req.files) {images.push({'productId':req.params.id,'name':req.files[i].filename}) }  
        if(images.length>0){
            db.Image.destroy({where:{productId:req.params.id}}).then(()=>{
                 db.Image.bulkCreate(images) .then(()=>{
                   console.log("imagenes subidas")
                   })
            })
        }
        db.Product.update({
                    name: req.body.name,
                    price: req.body.price,
                    discount:  req.body.discount,
                    idCategory: req.body.category ,
                    description: req.body.description,
                    idSexCategory: req.body.sexCategory,
                    idSaleCategory: req.body.saleCategory,
           },{
            where: {idProduct: req.params.id}
           })
       .then(()=>{
            return res.redirect('/products')
           })
     

    },

    borrarProducto: (req, res) => {
        db.Product.destroy({
            where:{
                idProduct: req.params.id
            } , force: true
        })
		// let finalProducts = products.filter(product => product.id != id);
		// fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		.then(()=>{
            res.redirect('/products');
        })},
    
    carrito: (req, res) => {

        // db.Product.findByPk(req.params.id, {
        //     include: [{association: "images"}]
        // }).then(product =>{
           
        // })

        res.render("carrito/productCart");

    },
   
}