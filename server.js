var express = require("express");

var app = express();
var bodyParser = require("body-parser");

var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var products = require("./routes/index");
var port = 3000;

app.use("/api", products);

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
