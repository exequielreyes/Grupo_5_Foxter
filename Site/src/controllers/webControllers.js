const path = require("path");
const fs = require('fs');

const { mainModule, nextTick } = require("process");
const db = require("../database/models");


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
  
    search: (req, res) => {
		let search = req.query.keywords;
		let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));	
		res.render('../views/result', { 
			products: productsToSearch, 
			search,
         
			
		});
	},
}