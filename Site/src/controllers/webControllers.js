const path = require("path");
const fs = require('fs');
// const db = require('../database/models');


const { mainModule, nextTick } = require("process");
const db = require("../database/models");
const  Op  = db.Sequelize.Op;

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index: (req, res) => {

		db.Product.findAll({
			include: [{association: "saleCategory"},{association: "images"},{association: "category"}]
		})
		.then((products) => {
			  res.render("index",{products});
		})
      
    },
  
    search: async function(req, res){
		let search = req.query.keywords;

		let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));	
		
		productsToSearch = db.Product.findAll({
			where: { name: 
                { [Op.like] : `%${search}%` } 
            },
			// include: [{association: "Product"}]
		})
		res.render('../views/result', { 
			products: productsToSearch, 
			search,
		});
	},
}







