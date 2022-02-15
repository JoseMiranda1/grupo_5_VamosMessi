const express= require("express");
const router= express.Router();
const controllers=require("../controllers/mainControllers");

router.get("/", controllers.home);
<<<<<<< HEAD
router.get("/productCart", controllers.productCart);
router.get("/productDetail", controllers.productDetail)
router.get("/productEdit", controllers.productEdit)
router.get("/user/profile",controllers.profile);
router.post("/user/profile",controllers.profile);
router.get("/productCreate", controllers.productCreate);
=======
router.get("/cambiosDevoluciones",controllers.cambiosDevoluciones);
router.get("/terminosCondiciones",controllers.terminosCondiciones)
router.get("/politica",controllers.politica)
router.get("/informacion",controllers.informacion)


>>>>>>> afd22df9dd1d1b18dd45de0a334356fa31232ef6
module.exports= router;