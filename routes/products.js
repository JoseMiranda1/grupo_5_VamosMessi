const express= require("express");
const router= express.Router();
const controllers=require("../controllers/products")


router.get("/", controllers.products);

router.get("/create", controllers.productCreate);
router.post("/", controllers.add)

router.get("/cart", controllers.productCart);
router.get("/detail", controllers.productDetail)

router.get("/edit", controllers.productEdit)

router.delete("/:id", controllers.delete)
router.get("/:id", controllers.read);


module.exports= router