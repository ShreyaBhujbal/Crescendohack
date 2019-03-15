var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ngo = require("./ngo");

var eventSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  target: Number,
  achieved: Number,
  time: Boolean,
  money: Boolean,
  things: Boolean,
  // event: [{ type: Schema.Types.ObjectId, ref: "event" }]
  ngo: { type: Schema.Types.ObjectId, ref: "ngo" }
});

module.exports.Schema = eventSchema;
mongoose.model("Event", eventSchema);
