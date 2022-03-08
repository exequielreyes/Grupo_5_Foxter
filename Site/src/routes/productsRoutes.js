const express = require('express');
const router = express.Router();
const path = require('path');
const productsControllers = require('../controllers/productsControllers.js');


router.get('/detail' , productsControllers.detalleProducto);
router.get('/editProduct' , productsControllers.editarProducto);
router.get('/cart' , productsControllers.carrito);

module.exports = router;