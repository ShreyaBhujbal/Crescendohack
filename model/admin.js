var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new mongoose.Schema({
    name:String,
    password:String,
    contact:String,
});

module.exports.Schema = adminSchema;
mongoose.model('Admin' , adminSchema);