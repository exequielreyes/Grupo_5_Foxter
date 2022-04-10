const express = require("express");
const router = express.Router();
const path = require("path");
const userControllers = require("../controllers/userControllers.js");
const validations = require("../middlewares/validateRegisterMiddleware.js");
const guestMiddleware = require("../middlewares/guestMiddleware.js");
const authMiddleware = require("../middlewares/authMiddleware.js");


//Formulario de registro
router.get("/register", guestMiddleware, userControllers.register);

//Procesar el registro
router.post("/register", validations, userControllers.processRegister);

//Formulario Login
router.get("/login", guestMiddleware,userControllers.login);

//Procesar el login
router.post("/login", userControllers.loginProcess);

//Perfil de usuario
router.get("/profile", authMiddleware,userControllers.profile);

// Logout
router.get('/logout', userControllers.logout);

module.exports = router;

