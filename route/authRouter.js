const route = require("express").Router();
const authrouter = require("../controller/authControllers");

route.get("/login", authrouter.login);
route.get("/logout", authrouter.logout);
module.exports = route;
