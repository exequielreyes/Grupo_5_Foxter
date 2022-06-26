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
                    countByCategoy:categorias,
                    products:prodAPi
                }
                res.json(respuesta);
            })

    },

   
   
}