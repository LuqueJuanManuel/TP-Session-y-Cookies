const { check } = require("express-validator");

module.exports = [
    check("name")
    .notEmpty().withMessage("Debes ingresar un nombre").bail()
    .isLength({min:2}).withMessage("El nombre debe tener mas de dos caracteres"),

    check("colores")
    .notEmpty().withMessage("debes seleccionar un color"),
    
    check("email")
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debes ingresar un email valido"),

    check("edad")
    .notEmpty().withMessage("debes ingresar tu edad").bail()
    .isNumeric().withMessage("debe ser un valor numerico")

];

