// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require("express-validator");
const usersController = require('../controllers/usersController')
const verUsuario = require('../middlewares/logUsers')

// Validaciones
// dentro de nuestro array vamos a tener un elemento por cada uno de los campos que queremos validar
const validateCreateForm = [
    body("nombre").notEmpty().withMessage("* Debe completar el campo de nombre").bail()
    .isLength({min : 4, max: 15}).withMessage("* El nombre debe tener como minimo 4 letas y maximo 15").bail(),
    body("apellido").notEmpty().withMessage("* debe completar el campo apellido").bail()
    .isLength({min : 4, max: 15}).withMessage("* El apellido debe tener al menos 5 caracteres").bail(),
    body("email").isEmail().withMessage("* Debe completar un email válido").bail(),
    body("contraseña").notEmpty().isLength({min : 3}).withMessage("* Debe completar la contraseña").bail()
];

/*** GET REGISTER ***/ 
router.get('/register', usersController.register); 
router.post('/register',validateCreateForm, usersController.userCreate)

router.get('/login', usersController.login)
router.post('/login',verUsuario)


module.exports = router;