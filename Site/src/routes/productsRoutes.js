const express = require('express');
const router = express.Router();
const path = require('path');
const multer= require('multer');
const productsControllers = require('../controllers/productsControllers.js');
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    
    filename: (res,file,cb)=>{
    
        const newFilename = Date.now() + '-' +  file.originalname;
    
        cb(null,newFilename);
    
    }
    
    })
const uploadFile = multer({storage});

router.get('/', productsControllers.index);
router.get('/detail/:id' , productsControllers.detalleProducto);
router.get('/edit/:id' , productsControllers.editarProducto);
router.get('/cart' , productsControllers.carrito);
router.get('/create' , productsControllers.crearProducto);
router.get('/:category', productsControllers.categoriaProducto);
router.get('/:category/:sexCategory', productsControllers.categoriaProducto);
router.post('/', uploadFile.single('image'), productsControllers.guardarProducto);


module.exports = router;