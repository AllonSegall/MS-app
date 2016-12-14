////////////////////////////  REQUIRE /////////////////////////////////////////
var express = require("express");
var bodyParser = require("body-parser");

///////////////////////////////// APP USE /////////////////////////////////////////
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(express.static("node_modules"));


/////////////////////////////// APP POST  /////////////////////////////////////

app.post("/journey", function(req, res){
  res.send(req.body.data);
});







app.listen(8000);
