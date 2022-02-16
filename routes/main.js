const express = require("express");
const router = express.Router();
const controllers = require("../controllers/mainControllers");

router.get("/", controllers.home);
router.get("/cambiosDevoluciones", controllers.cambiosDevoluciones);
router.get("/terminosCondiciones", controllers.terminosCondiciones)
router.get("/politica", controllers.politica)
router.get("/informacion", controllers.informacion)


module.exports = router;