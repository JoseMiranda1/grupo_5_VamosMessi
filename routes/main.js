const express= require("express");
const router= express.Router();
const controllers=require("../controllers/mainControllers");

router.get("/", controllers.home);
router.get("/cambiosDevoluciones",controllers.cambiosDevoluciones);
router.get("/terminosCondiciones",controllers.terminosCondiciones)
router.get("/politica",controllers.politica)
router.get("/informacion",controllers.informacion)
router.get("/productCart", controllers.productCart);
router.get("/productDetail", controllers.productDetail)
router.get("/productEdit", controllers.productEdit)
router.get("/user/profile",controllers.profile);
router.post("/user/profile",controllers.profile);
router.get("/productCreate", controllers.productCreate);
module.exports= router;