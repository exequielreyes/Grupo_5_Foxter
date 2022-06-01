const express = require('express');
const router = express.Router();
const path = require('path');
const multer= require('multer');
const { body } = require("express-validator");
const productsControllers = require('../controllers/productsControllers.js');
const validations = require("../middlewares/validateCreateProductMiddleware.js");

const storage = multer.diskStorage({
    destination: (req ,file, cb)=>{
        cb(null, path.join(__dirname, '../../public/images/product'));
    },
    
    filename: (res,file,cb)=>{
    
        const newFilename = Date.now() + '-' +  file.originalname;
    
        cb(null,newFilename);
    
    }
    
    })
const uploadFile = multer({storage});

/***Todo los productos ***/
router.get('/', productsControllers.index);


    


/***Crear un productos ***/
router.get('/create', productsControllers.crearProducto);
router.post('/', uploadFile.array('image'),validations, productsControllers.guardarProducto);



/*** Ver el detalle de un producto***/
router.get('/detail/:id' , productsControllers.detalleProducto);

/*** Editar producto***/
router.get('/edit/:id' , productsControllers.editarProducto);
router.put('/edit/:id' , uploadFile.single('image'), productsControllers.actualizarProducto);


/*** Borrar Producto ***/
router.delete('/delete/:id', productsControllers.borrarProducto); 
// router.post('/delete/:id', productsControllers.)



router.get('/cart' , productsControllers.carrito);

router.get('/:category/:sexCategory?', productsControllers.categoriaProducto);









module.exports = router;