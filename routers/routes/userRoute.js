const express = require("express");
const userRoute = express.Router();

const { userProfile,deleteUser,getUsers} = require("../controllers/user");
const { authentication } = require("../middlewares/authentication");

userRoute.get("/user",authentication, userProfile);
userRoute.get("/getUsers", getUsers);

userRoute.delete("/deleteUsers/:id",authentication, deleteUser);

module.exports = userRoute;