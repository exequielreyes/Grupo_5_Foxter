const path = require("path");
const fs = require('fs');
const { mainModule, nextTick } = require("process");
const db = require("../database/models");
const  Op  = db.Sequelize.Op;
var sequelize = require('sequelize');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req, res) => {
		let minimos= db.Product.findAll({
            attributes: [
              [sequelize.fn("MIN", sequelize.col("price")), "price"],
            ],
            group: 'category.name',
           
            include: [{ association: "category" }]
          });
		let products=db.Product.findAll({
			include: [{association: "saleCategory"},{association: "images"},{association: "category"}]
		})
		Promise.all([products,minimos])
            .then(([products,minimos]) => {
                res.render('index', { products,minimos });
            })
      
    },
  
    search: async function(req, res){
		let search = req.query.keywords;
		// let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));	
		db.Product.findAll({
			where: 
			{ name: 
                { [Op.like] : `%${search}%` } 
            },
		}).then(productsToSearch =>{
			res.render('../views/result', { 
				products: productsToSearch, 
				search,
			});
		}) 
		
	},
}







