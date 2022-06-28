const express = require('express');
const router = express.Router();
const path = require('path');
const apiProductsControllers = require('../../controllers/api/productsControllers.js');


/***Todo los productos ***/
router.get('/', apiProductsControllers.index);
router.get('/:id' , apiProductsControllers.detalleProducto);



    



module.exports = router;