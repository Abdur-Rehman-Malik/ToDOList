const route = require("express").Router();
const userController = require("../controller/userController");

route.post("/createUser", userController.createUser);

module.exports = route;
