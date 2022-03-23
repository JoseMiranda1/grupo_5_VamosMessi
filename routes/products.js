const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const authMiddleware = require("../middlewares/authMiddleware");

// Multer

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname,'../public/uploads'))
    },
    filename: function(req, file, cb) {
        
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + "_" + file.fieldname + path.extname(file.originalname))
    }
})

const upload = multer({ storage: multerDiskStorage })


const controllers = require("../controllers/products")
router.get("/", controllers.products);

router.get("/create",authMiddleware, controllers.productCreate);

router.post("/create", upload.single("imageCreate"), controllers.add);

router.get("/search", controllers.search);

router.get("/cart", controllers.productCart);

router.get("/detail/:id", controllers.productDetail)

router.get("/listita", controllers.listita);



router.get("/borrar/:id", controllers.destroy);

router.get("/edit/:id",authMiddleware, controllers.productEdit);

router.post("/edit/:id",authMiddleware, controllers.productUpdate)

//router.delete("/:id", controllers.delete);





module.exports = router