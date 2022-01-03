const express= require("express");
const router= express.Router();
const controllers=require("../controllers/main");

router.get("/", controllers.home);
router.get("/productCart", controllers.productCart);
router.get("/product-detail", controllers.productDetail)
router.get("/productEdit", controllers.productEdit)
router.get("/user/profile",controllers.profile);
router.post("/user/profile",controllers.profile)
module.exports= router;