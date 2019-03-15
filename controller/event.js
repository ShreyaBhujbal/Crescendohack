var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

var Event = require("../model/event");
var Event = mongoose.model("Event");
var Ngo = require("../model/event");
/*
module.exports.addEvent = (req, res) => {
  var query = {
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    target: req.body.target,
    achieved: req.body.achieved
  };

  Event.create(query, (err, doc) => {
    if (!err) {
      console.log(doc);
      res.send({ status: "Done", doc: doc });
    } else {
      res.send({ status: "Error", err: err });
    }
  });
};



exports.delete = function(req, res) {
  Event.remove(
    {
      _id: req.params.event_id
    },
    function(err, event) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Event deleted"
      });
    }
  );
};
*/
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
