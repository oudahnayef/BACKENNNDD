const express = require("express");
 const taskRoute = express.Router();
 const {authentication} = require("../middlewares/authentication");

const {getTask,postTask,removeTask,removeTasks,updateTask,completeTask } = require("../controllers/Task");
 

taskRoute.put("/task",authentication,updateTask);
taskRoute.delete("/task/:id",authentication,removeTask);
taskRoute.delete("/task",authentication,removeTasks);
taskRoute.get("/task" ,authentication, getTask);
taskRoute.post("/task",authentication,postTask);
taskRoute.put("/task/:id",authentication,completeTask);


module.exports = taskRoute;
