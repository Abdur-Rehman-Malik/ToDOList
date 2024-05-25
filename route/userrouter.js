const route = require("express").Router();
const userController = require("../controller/userController");
// const userService = require("../services/userService")
// const userModels =require("../models/userModels")

route.post("/createUser", userController.createUser);

module.exports = route;
