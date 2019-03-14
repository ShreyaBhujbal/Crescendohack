var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var event = require('./event');

var paymentSchema = new mongoose.Schema({
    name:String,
    mail:String,
    amount:Number,
    event:{type : Schema.Types.ObjectId, ref: 'event'},
});

module.exports.Schema = paymentSchema;
mongoose.model('Payment' , paymentSchema);
