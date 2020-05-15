const express = require("express");
const routes = express.Router();
const BookController = require("../Controllers/BookController");

routes.get("/book", BookController.list);
routes.post("/book", BookController.create);

module.exports = routes;
