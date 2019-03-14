var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

var Event = require("../model/event");
var Event = mongoose.model("Event");

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

module.exports.getevents = (req, res) => {
  Event.find({}, (err, doc) => {
    if (!err) {
      res.send({ status: "Done", data: doc });
    } else {
      res.send({ status: "Error", error: err });
    }
  });
};

exports.delete = function(req, res) {
  Event.remove(
    {
      _id: req.params.event_id
    },
    function(err, contact) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Event deleted"
      });
    }
  );
};
