var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var event = require('./event');

var volunteerSchema = new mongoose.Schema({
    name:String,
    mail:String,
    contact:String,
    event:[{type : Schema.Types.ObjectId, ref: 'event'}],
});

module.exports.Schema = volunteerSchema;
mongoose.model('Volunteer' , volunteerSchema);
