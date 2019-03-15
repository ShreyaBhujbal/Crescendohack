var express = require("express");
var app = express();
var parser = require("body-parser");
var index = require("./route/index");
var path = require("path");
// var logger = require('morgan');
const dir = __dirname;
const port = 3000;
require("./model/db");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

///Require Routes
var apiRoute = require("./route/api");
//
app.use("/api", apiRoute);
//app.use("/", index);
app.listen(port, function() {
  console.log("Site is active on localhost:" + port + "/");
});
