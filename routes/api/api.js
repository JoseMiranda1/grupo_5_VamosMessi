const express = require('express');
const { body, check } = require('express-validator');
const router = express.Router();
const userController=require("../../controllers/api/apiUsers")
const categoryController = require("../../controllers/api/Category");
const productController = require("../../controllers/api/Product");
router.get("/category", categoryController.show);
router.post("/category", categoryController.store);
router.get("/category/search", categoryController.search);
router.get("/category/search-results", categoryController.searchResults);
router.get("/category/:id", categoryController.detail);
router.delete("/category/:id", categoryController.delete);
router.get("/product", productController.all)
router.get("/product/:id", productController.detail)
router.get("/product", productController.test);
router.get("/users", userController.show)
router.get("/users/:id", productController.detail)
router.post("/product", [
  check("hobbies").custom((value, {req}) => {
    console.log({ value })
    console.log({req: req.body})
    return true
  }).withMessage("Error")
], productController.testPost);
module.exports = router;