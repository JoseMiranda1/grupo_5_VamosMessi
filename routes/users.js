const express=require("express");
const router=express.Router();
const controllers=require("../controllers/users");

router.get("/profile",controllers.profile);//se rompe

router.post("/login", controllers.login);//se rompe
router.post("/", controllers.register);// se rompe

router.post("/edit", controllers.edit);// se rompe

router.get("/logout",controllers.logout);


module.exports= router;
