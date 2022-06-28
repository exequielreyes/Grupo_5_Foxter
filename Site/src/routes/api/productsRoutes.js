const express = require('express');
const router = express.Router();
const path = require('path');
const apiProductsControllers = require('../../controllers/api/productsControllers.js');


/***Todo los productos ***/
router.get('/', apiProductsControllers.index);
router.get('/:id', apiProductsControllers.productById);




    


// /***Crear un productos ***/
// router.get('/create', productsControllers.crearProducto);
// router.post('/', uploadFile.array('image'),validations, productsControllers.guardarProducto);



// /*** Ver el detalle de un producto***/
// router.get('/detail/:id' , productsControllers.detalleProducto);

// /*** Editar producto***/
// router.get('/edit/:id' , productsControllers.editarProducto);
// router.put('/edit/:id' ,  uploadFile.array('image'), productsControllers.actualizarProducto);


// /*** Borrar Producto ***/
// router.delete('/delete/:id', productsControllers.borrarProducto); 
// // router.post('/delete/:id', productsControllers.)



// router.get('/cart' , productsControllers.carrito);

// router.get('/:category/:sexCategory?', productsControllers.categoriaProducto);









module.exports = router;