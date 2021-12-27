const express= require("express");
const router= express.Router();
const controllers=require("../controllers/main");

router.get("/", controllers.home);
router.get("/productCart", controllers.productCart);
router.get("/product-detail", controllers.productDetail)

module.exports= router;