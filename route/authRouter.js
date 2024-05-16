const router=require("express").Router();
const {login, logout}=require("../controller/authControllers");

router.get("/login", login);
router.get("/logout",logout);

module.exports=router;