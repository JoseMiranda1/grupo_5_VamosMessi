const {body} = require ("express-validator")


const validations = [ 
   body("name").notEmpty().withMessage("El campo de nombre es obligatorio").bail(),
    body("stock").isNumeric().withMessage("El campo de stock es obligatorio").bail(),
    body("idBrand").notEmpty().withMessage("El campo de marca es obligatorio").bail(),
    body("description").notEmpty().withMessage("El campo descripcion es obligatorio").bail(),
    body("sizes").notEmpty().withMessage("El campo de tamaño es obligatorio").bail(),
    body("categories").notEmpty().withMessage("El campo de categoria es obligatorio").bail(),
    body("colors").notEmpty().withMessage("El campo de color es obligatorio").bail(),
    body("priceCreate").isNumeric().withMessage("El campo precio es obligatorio").bail(),
    body("priceCreate").isFloat({min:0}).withMessage("El campo precio debe ser mayor a cero").bail(),
    // body("imageCreate").notEmpty().withMessage("el formato tiene que ser png, jpeg, jpg,gif").bail(),
]

module.exports=validations;