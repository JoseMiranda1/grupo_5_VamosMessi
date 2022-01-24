const express=require("express");
const router=express.Router();
const controllers=require("../controllers/users");

router.get("/profile",controllers.profile);
router.post("/profile",controllers.profile);

router.get("/", controllers.users)
router.post("/", controllers.register)

module.exports= router;