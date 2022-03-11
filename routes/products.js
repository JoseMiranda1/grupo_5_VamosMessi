const express = require("express");
const router = express.Router();
const path = require("path");
const authMiddleware = require("../middlewares/authMiddleware");

// Multer
const multer = require("multer");
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname,'../public/uploads'))
    },
    filename: function(req, file, cb) {
        console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + "_" + file.fieldname + path.extname(file.originalname))
    }
})
const upload = multer({ storage: multerDiskStorage })


const controllers = require("../controllers/products")
router.get("/", controllers.products);

router.get("/create",authMiddleware, controllers.productCreate);

router.post("/", upload.single("imageCreate"), controllers.add)

router.get("/cart", controllers.productCart);

router.get("/detail", controllers.productDetail)

router.get("/edit",authMiddleware, controllers.productEdit)

router.delete("/:id", controllers.delete)

router.get("/:id", controllers.read);

module.exports = router