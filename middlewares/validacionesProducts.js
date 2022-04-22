const {body} = require ("express-validator")


const validations = [ 
    // body("user").notEmpty().withMessage("el campo de usuario es obligatorio").bail(),
    // body("email").isEmail().withMessage("El campo de email es obligatorio").bail(),
    // body("password").notEmpty().withMessage("el campo de password obligatorio").bail(),
    // body("reclaveuser").notEmpty().withMessage("el campo de usuario es obligatorio").bail(),
    // body("country").notEmpty().withMessage("el campo de paises es obligatorio").bail(),
    // body("fechaNacimiento").notEmpty().withMessage("El campo de fecha de nacimiento es obligatorio").bail(),
    body("name").notEmpty().withMessage("El campo de nombre es obligatorio").bail(),
    body("stock").isNumeric().withMessage("El campo de stock es obligatorio").bail(),
    body("idBrand").notEmpty().withMessage("El campo de marca es obligatorio").bail(),
    body("description").notEmpty().withMessage("El campo descripcion es obligatorio").bail(),
    body("sizes").notEmpty().withMessage("El campo de tamaño es obligatorio").bail(),
    body("categories").notEmpty().withMessage("El campo de categoria es obligatorio").bail(),
    body("colors").notEmpty().withMessage("El campo de color es obligatorio").bail(),
    body("priceCreate").isNumeric().withMessage("El campo precio es obligatorio").bail(),
    body("priceCreate").isFloat({min:0}).withMessage("El campo precio debe ser mayor a cero").bail(),
]

module.exports=validations;