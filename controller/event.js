var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

var Event = require("../model/event");
var Event = mongoose.model("Event");
var Ngo = require("../model/event");

module.exports.addEvent = (req, res) => {
  Event.create({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    target: req.body.target,
    achieved: req.body.achieved,
    ngo: req.body.ngoId
  });
};

module.exports.getevents = (req, res) => {
  Event.find({ ngo: req.params.ngoId }, (err, doc) => {
    if (err) {
      res.send({ error: err });
    } else {
      //Events
      res.send({ status: "Done", data: doc });
    }
  });
};

//VIEW EVENTS

module.exports.geteventsbycategory = (req,res) => {
  options = req.body.options;
  // options = ["Food", "Education", "Health", "Disaster"];

  Event.find({ category: { $in: options } }, (err, doc) => {
    if (err) {
      res.send({ error: err });
    } else {
      //Events
      res.send({ status: "Done", data: doc });
      console.log(doc);
    }
  });
};
