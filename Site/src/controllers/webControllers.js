const path = require("path");
const fs = require('fs');

const { mainModule, nextTick } = require("process");


const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    index: (req, res) => {
        res.render("index",{products});
    }
}