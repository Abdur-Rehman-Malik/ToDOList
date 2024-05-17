const route = require("express").Router();
const authrouter = require("../controller/authControllers");
const userController = require("../controller/userController");

route.get("/login", authrouter.login);
route.get("/logout", authrouter.logout);
route.post("createUser", userController.createUser);
module.exports = route;
