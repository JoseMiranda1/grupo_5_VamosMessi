const express= require("express");
const router= express.Router();
const controllers=require("../controllers/mainControllers");

router.get("/", controllers.home);
router.get("/productCart", controllers.productCart);
router.get("/product-detail", controllers.productDetail)
router.get("/productEdit", controllers.productEdit)

module.exports= router;