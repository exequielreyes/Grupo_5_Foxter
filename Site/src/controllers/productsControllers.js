const fs = require('fs');
const path = require('path');
const { validationResult, body } = require('express-validator');
const { mainModule, nextTick } = require("process");
const db = require('../database/models');
// const { defaultValueSchemable } = require('sequelize/types/utils');
// const {Category } = require('../database/models');


const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req, res) => {

        db.Product.findAll(
            {
                order: [
                    ["idProduct", "DESC"]
                ],
                include: [{ association: "images" }]

            }
        )
            .then(products => {
                // res.send(products.images)

                res.render('products/productsList', { products });
            })
    },

    categoriaProducto: (req, res) => {
        if (req.params.sexCategory) {
            category = req.params.category;
            sexCategory = req.params.sexCategory;
            db.Product.findAll(
                {
                    where: {
                        '$category.name$': category,
                        '$sexCategory.name$': sexCategory,
                    },
                    order: [
                        ["idProduct", "DESC"]
                    ],
                    include: [{ association: "images" }, { association: "category" }, { association: "sexCategory" }],

                }
            ).then(productsFilter => {
                res.render('products/productsList', { 'products': productsFilter, 'category': category, 'categorySex': sexCategory });

            })

        }
        else {
            category = req.params.category;
            db.Product.findAll(
                {
                    include: [{ association: "images" }, { association: "category" }],

                    where: {
                        '$category.name$': category,
                    },
                    order: [
                        ["idProduct", "DESC"]
                    ],
                }
            )
                .then(productsFilter => {
                    res.render('products/productsList', { 'products': productsFilter, 'category': category });
                })
        }
    },

    detalleProducto: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{ association: "category" }, { association: "sexCategory" }, { association: "images" }]
        }).then(product => {
            console.log(product.name);
            res.render("products/productDetail", { product })
        })
    },

    crearProducto: (req, res) => {
        let categorias = db.Category.findAll();
        let sexCategorias = db.sexCategory.findAll()
        let saleCategorias = db.saleCategory.findAll()
        let sizes = db.Size.findAll()
        Promise.all([categorias, sexCategorias, saleCategorias, sizes])
            .then(([categorias, sexCategorias, saleCategorias, sizes]) => {
                res.render('admin/createProduct', { categorias, sexCategorias, saleCategorias, sizes })
            })

    },

    guardarProducto: (req, res) => {
        let resultValidation = validationResult(req);
        //return  res.send(resul.errors);
        if (resultValidation.errors.length > 0) {
            let categorias = db.Category.findAll();
            let sexCategorias = db.sexCategory.findAll()
            let saleCategorias = db.saleCategory.findAll()
            let sizes = db.Size.findAll()
            Promise.all([categorias, sexCategorias, saleCategorias, sizes])
                .then(([categorias, sexCategorias, saleCategorias, sizes]) => {
                    res.render('admin/createProduct', { categorias, sexCategorias, saleCategorias, sizes, errors: resultValidation.mapped(), oldData: req.body })
                })
        }
        else {
            let images = []
            for (i in req.files) { images.push({ 'name': req.files[i].filename }) }
            db.Product.create({
                name: req.body.name,
                price: req.body.price,
                discount:  req.body.discount,
                idCategory: req.body.category ,
                description: req.body.description,
                idSexCategory: req.body.sexCategory,
                idSaleCategory: req.body.saleCategory,
                images: images,

            }, {
                include: [{
                    association: "images"
                }
                ]

            }).then(product => {
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
    for (i in req.files) {images.push({'name':req.files[i].filename}) }  
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
           }).then(()=>{
            return res.redirect('/products')
        })

        //        id = req.params.id;
        //        let productToEdit = products.find(product => product.id == id)
        //    if(req.file){
        //        productToEdit = {
        //            id: productToEdit.id,
        //            ...req.body,
        //            image: req.file.filename
        //        };
        //    }else{
        //        productToEdit = {
        //            id: productToEdit.id,
        //            ...req.body,
        //            // image: req.body.image
        //        };
        //    }


        //        let newProducts = products.map(product => {
        //            if (product.id == productToEdit.id) {
        //                return product = {...productToEdit};
        //            }
        //            return product;
        //        })

        //        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        //        res.redirect('../detail/'+ id);

    },

    borrarProducto: (req, res) => {
        db.Product.destroy({
            where: {
                idProduct: req.params.id
            }, force: true
        })
            // let finalProducts = products.filter(product => product.id != id);
            // fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
            .then(() => {
                res.redirect('/products');
            })
    },

    carrito: (req, res) => {
        res.render("carrito/productCart");
    },

}