const express = require('express');
const router = express.Router();
const path = require('path');
const multer= require('multer');
const productsControllers = require('../controllers/productsControllers.js');
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
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
router.get('/create' , productsControllers.crearProducto);
router.post('/', uploadFile.single('image'), productsControllers.guardarProducto);

/*** Ver el detalle de un producto***/
router.get('/detail/:id' , productsControllers.detalleProducto);

/*** Editar producto***/
router.get('/edit/:id' , productsControllers.editarProducto);
router.put('/edit/:id' , productsControllers.actualizarProducto);


/*** Borrar Producto ***/
router.delete('/delete/:id', productsControllers.borrarProducto); 




router.get('/cart' , productsControllers.carrito);

router.get('/:category', productsControllers.categoriaProducto);
router.get('/:category/:sexCategory', productsControllers.categoriaProducto);









module.exports = router;