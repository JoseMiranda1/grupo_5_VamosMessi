const express= require("express");
const router= express.Router();
const controllers=require("../controllers/mainControllers");

router.get("/", controllers.home);
router.get("/productCart", controllers.productCart);
router.get("/productDetail", controllers.productDetail)
router.get("/productEdit", controllers.productEdit)
router.get("/user/profile",controllers.profile);
router.post("/user/profile",controllers.profile)
module.exports= router;