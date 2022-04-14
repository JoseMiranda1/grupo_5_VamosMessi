const express = require("express");
const router = express.Router();
const controllers = require("../controllers/users");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const validations = require("../middlewares/validacionesProducts")

router.get("/profile", authMiddleware, controllers.profile);
router.post("/login", guestMiddleware,validations, controllers.login);
router.post("/", guestMiddleware, controllers.register)
router.get("/edit", authMiddleware, controllers.edit);
router.post("/edit", controllers.editP)

router.get("/logout", controllers.logout);


module.exports = router;