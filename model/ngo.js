var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var event = require("./event");

var ngoSchema = new mongoose.Schema({
    name:String,
    password:String,
    contact:String,
    mail:String,
    points:Number,
    description:String,
    event:[{type : Schema.Types.ObjectId, ref: 'event'}],
	//subjectData:[{type : Schema.Types.ObjectId, ref: 'SubjectData'}],
});

module.exports.ngoSchema = ngoSchema;
mongoose.model("Ngo", ngoSchema);
