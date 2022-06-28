const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
var sequelize = require('sequelize');



module.exports = {
    index: (req, res) => {
        
    
        let products = db.Product.findAll(
            {
                include: [{ association: "images" }]

            }
        )
           
        let categorias= db.Product.findAll({
            attributes: [
              [sequelize.fn("count", sequelize.col("product.idCategory")), "total"],
            ],
            group: 'category.name',
           
            include: [{ association: "category" }]
          });
        Promise.all([categorias, products])
            .then(([categorias, products]) => {
               let prodAPi=[]
                products.forEach(element => {
                    let item={
                        id:element.idProduct, 
                        name:element.name, 
                        description:element.description, 
                        price:element.price,
                        image:element.images,
                        detail:'http://localhost:3000/products/detail/'+element.idProduct
                    }
                    prodAPi.push(item)
                });
               

                let respuesta={
                    count:products.length,
                    countByCategory:categorias,
                    products:prodAPi
                }
                res.json(respuesta);
                console.log(respuesta);
            })

    },

    detalleProducto: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: "category"},{association: "sexCategory"},{association: "images"}, {association: "sizes"}]
        }).then(product => {
            res.json(product)
        })
    },

   
   
}









    // // let categorias = db.Product.findAll({
    //     //     where:{idProduct: req.params.id} ,
    //     //     include: [{ association: "category" }]
    //     //   });

    //     //   let saleCategories = db.Product.findAll({
    //     //     where:{idProduct: req.params.id} ,
    //     //     include: [{ association: "category" }]
    //     //   });

    //     //   let sexCategories = db.Product.findAll({
    //     //     where:{idProduct: req.params.id} ,
    //     //     include: [{ association: "category" }]
    //     //   });
    //     let allProductCategories = [];

    //     db.Product.findByPk(req.params.id, {  include: [{ association: "images" }, {association: "category"},{association: "sexCategory"},{association: "saleCategory"}, {association: "sizes"}] }) 
    //     .then((product) => {
            
    //         console.log("Prueba" + product.category);


    //         db.product.findByPk(product.id)


    //         // let firstImage = product.images[0].name;

           
    //         // product.category.forEach(category => {
    //         //     allProductCategories.push(category.name);
    //         // });

    //         // let allSaleCategories = [];
    //         // product.saleCategory.forEach(saleCategory => {
    //         //     allSaleCategories.push(saleCategory.name);
    //         // });

    //         // let allSexCategories = [];
    //         // product.sexCategory.forEach(sexCategory => {
    //         //     allSexCategories.push(sexCategory.name);
    //         // });

    //         // let allProductSizes = [];
    //         // product.sizes.forEach(size => {
    //         //     allProductSizes.push(size.name);
    //         // });

    //         // let response = {
    //         //     meta: {
    //         //          status: 200
    //         //     },
    //         //     data:{
    //         //          name: product.name,
    //         //          description: product.description,
    //         //          price: product.price,
    //         //          discount: product.discount,
    //         //          url_image: `http://localhost:3000/images/product/${firstImage}`,
    //         //          category: allProductCategories,
    //         //          sexCategory: allSexCategories,
    //         //          saleCategory: allSaleCategories,
    //         //          size: allProductSizes
    //         //      }
    //         //  }

    //         // return res.json(response);