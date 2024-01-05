// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require("express-validator");
const usersController = require('../controllers/usersController')

// Validaciones
// dentro de nuestro array vamos a tener un elemento por cada uno de los campos que queremos validar
const validateCreateForm = [
    body("nombre").notEmpty().withMessage("Debe completar el campo de nombre"),
    body("apellido").notEmpty().withMessage("Debe completar el campo de nombre"),
    body("email").isEmail().withMessage("Debe completar un email válido")
];

/*** GET REGISTER ***/ 
router.get('/register', usersController.register); 
router.post('/register',validateCreateForm, usersController.userCreate)


module.exports = router;