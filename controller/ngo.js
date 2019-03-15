var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

var Ngo = require("../model/ngo");
var Ngo = mongoose.model("Ngo");

module.exports.addNgo = (req, res) => {
  var query = {
    name: req.body.name,
    contact: req.body.contact,
    password: req.body.password,
    mail: req.body.mail,
    points: 0,
    description: req.body.description
  };
  Ngo.create(query, (err, doc) => {
    if (!err) {
      console.log(doc);
      res.redirect("/done");
      //res.send({ status: "Done", doc: doc });
    } else {
      res.send({ status: "Error", err: err });
    }
  });
};

module.exports.NGO = (req, res) => {};

module.exports.getngo = (req, res) => {
  Ngo.find({}, (err, doc) => {
    if (!err) {
      res.send({ status: "Done", data: doc });
    } else {
      res.send({ status: "Error", error: err });
    }
  });
};

exports.delete = function(req, res) {
  Ngo.remove(
    {
      _id: req.params.ngo_id
    },
    function(err, ngo) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Ngo deleted"
      });
    }
  );
};
