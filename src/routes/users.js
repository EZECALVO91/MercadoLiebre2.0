// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

const usersController =require('../controllers/usersController')

/*** GET REGISTER ***/ 
router.get('/register', usersController.register); 


module.exports = router;