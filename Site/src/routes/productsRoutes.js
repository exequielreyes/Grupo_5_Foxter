const express = require('express');
const router = express.Router();
const path = require('path');
const productsControllers = require('../controllers/productsControllers.js');

router.get('/', productsControllers.index);
router.get('/detail/:id' , productsControllers.detalleProducto);
router.get('/edit/:id' , productsControllers.editarProducto);
router.get('/cart' , productsControllers.carrito);

module.exports = router;