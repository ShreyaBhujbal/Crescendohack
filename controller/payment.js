var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

var Payment = require("../model/payment");
var Payment = mongoose.model("Payment");

module.exports.payment = (req, res) => {
  Payment.create({
    name: req.body.name,
    mail: req.body.mail,
    amount: req.body.amount,
    event: req.body.eventId
  });
};
