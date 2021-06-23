var express = require("express");
var router = express.Router();

const models = require("../models/index");

router.get("/products", (req, res) => {
  models.Product.findAll()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.send("error", err);
    });
});

module.exports = router;
