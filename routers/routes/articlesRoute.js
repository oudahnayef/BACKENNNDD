const express = require("express");
const articlesRoute = express.Router();

const { postArticles, getarticles,deletedArt } = require("../controllers/articles");
const { authentication } = require("../middlewares/authentication");

articlesRoute.post("/articl", authentication, postArticles);
articlesRoute.get("/articl",  getarticles);
articlesRoute.delete("/articl/:id",deletedArt)



module.exports = articlesRoute;