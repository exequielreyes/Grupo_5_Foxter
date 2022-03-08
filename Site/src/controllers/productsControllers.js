const path = require("path");
const { mainModule } = require("process");


module.exports = {

    detalleProducto: (req, res) => {
        res.render("products/productDetail");
    },

    editarProducto: (req , res) =>{
        res.render("admin/editProduct");
    }

}