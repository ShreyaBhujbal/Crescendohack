var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var eventCtrl = require("../controller/event");
//passCtrl = require("../ctrlr/pass");

router
  .route("/event")
  .get(eventCtrl.getevents)
  .post(eventCtrl.addEvent);

module.exports = router;
