const express=require("express");
const router=express.Router();
const controllers=require("../controllers/users");

router.get("/profile",controllers.profile);

router.post("/login", controllers.login);
router.post("/", controllers.register);

router.post("/edit", controllers.edit);

router.get("/logout",controllers.logout);


module.exports= router;
