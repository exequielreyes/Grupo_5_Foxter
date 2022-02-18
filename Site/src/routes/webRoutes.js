const express = require('express');
const router = express.Router();
const path = require('path');
const webControllers = require('../controllers/webControllers.js');

router.get('/' ,webControllers.index);
router.get('/login' , webControllers.login);
router.get('/register' , webControllers.register);
router.get('/productCart' , webControllers.carrito);
router.get('/productDetail' , webControllers.detalleProducto);

module.exports = router;