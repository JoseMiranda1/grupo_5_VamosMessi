const express=require("express");
const router=express.Router();
const controllers=require("../controllers/users");
const guestMiddleware = require ("../middlewares/guestMiddleware"); 
const authMiddleware = require ("../middlewares/authMiddleware"); 

router.get("/profile",authMiddleware,controllers.profile);
router.post("/login", guestMiddleware,controllers.login); //va por POST POER NO FUNCIONA CON GET SI
router.get("/login",guestMiddleware,controllers.loginV)
router.post("/",guestMiddleware,controllers.register); //va por POST PERO NO FUNCIONA CON GET SI
router.get("/register",guestMiddleware,controllers.RegisterV); //va por POST PERO NO FUNCIONA CON GET SI

router.post("/edit", controllers.edit);

router.get("/logout",controllers.logout);


module.exports= router;