const express = require('express');
const router = express.Router();
const path = require('path');
const apiProductsControllers = require('../../controllers/api/productsControllers.js');


/***Todo los productos ***/
router.get('/', apiProductsControllers.index);
<<<<<<< HEAD
router.get('/:id' , apiProductsControllers.detalleProducto);
=======
router.get('/:id', apiProductsControllers.productById);

>>>>>>> 17bfee54ba15169fc21b96141a3e96b272f5437f



    



module.exports = router;