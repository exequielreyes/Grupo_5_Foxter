const express = require('express');
const router = express.Router();
const path = require('path');
const apiUserController = require('../../controllers/api/apiUserController.js');



router.get('/', apiUserController.index);
// router.get('/:id', apiUserController.productById);




module.exports = router;