const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute")
const taskRoute=require("./routers/routes/AllTask");
const userRoute=require("./routers/routes/userRoute");
const articlesRoute=require("./routers/routes/articlesRoute")

app.use(userRoute)
app.use(taskRoute);
app.use(signUpRoute);
app.use(loginRoute);
app.use(articlesRoute);

//////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running in port 5000");
})
