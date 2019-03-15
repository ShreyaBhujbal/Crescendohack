var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var eventCtrl = require("../controller/event");
var ngoCtrl = require("../controller/ngo");

router
  .route("/:ngoId/event")
  .get(eventCtrl.getevents)
  .post(eventCtrl.addEvent);

router.route("/allevent").get(eventCtrl.geteventsbycategory);

router
  .route("/ngo")
  .get(ngoCtrl.getngo)
  .post(ngoCtrl.addNgo);

router
  .route("/:ngoId/:eventId/payment")
  //.get(eventCtrl.getevents)
  .post(eventCtrl.addEvent);

module.exports = router;
