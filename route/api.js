var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var eventCtrl = require("../controller/event");
var ngoCtrl = require("../controller/ngo");

router
  .route("/event")
  .get(eventCtrl.getevents)
  .post(eventCtrl.addEvent);

router
  .route("/ngo")
  .get(ngoCtrl.getngo)
  .post(ngoCtrl.addNgo);

module.exports = router;
