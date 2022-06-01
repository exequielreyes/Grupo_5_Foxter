const express = require("express");
const router = express.Router();
const path = require("path");
const userControllers = require("../controllers/userControllers.js");
const validations = require("../middlewares/validateRegisterMiddleware.js");
const guestMiddleware = require("../middlewares/guestMiddleware.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const multer= require('multer');

const storage = multer.diskStorage({
    destination: (req ,file, cb)=>{
        cb(null, path.join(__dirname, '../../public/images/user'));
    },
    
    filename: (res,file,cb)=>{
    
        const newFilename = Date.now() + '-' +  file.originalname;
    
        cb(null,newFilename);
    
    }
    
    })
const uploadFile = multer({storage});


//Formulario de registro
router.get("/register", guestMiddleware, userControllers.register);

//Procesar el registro
router.post("/register", validations, userControllers.processRegister);

//Formulario Login
router.get("/login", guestMiddleware,userControllers.login);

//Procesar el login
router.post("/login", userControllers.loginProcess);

//Perfil de usuario
router.get("/profile", uploadFile.single('image'), authMiddleware,userControllers.profile);

// Logout
router.get('/logout', userControllers.logout);

module.exports = router;

