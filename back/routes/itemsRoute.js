const express = require("express");
const itemsController = require("../controllers/itemsController");

const Itemsrouter = express.Router();

Itemsrouter.get("/fetch-items/:itemId", itemsController.getItems);
Itemsrouter.get("/fetch-items/:itemId/bids", itemsController.geBid);
Itemsrouter.get("/fetch-items/", itemsController.getAllItems);
Itemsrouter.post("/add", itemsController.addItem);
Itemsrouter.get("/get", itemsController.getAll);
module.exports = Itemsrouter;
