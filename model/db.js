var mongoose = require("mongoose"),
  database =
    "mongodb://shreyabhujbal:shreyabhujbal*27@ds213896.mlab.com:13896/cres";
mongoose.connect(database, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("connected");
});
require('./ngo');
require('./event');
require('./admin')
require('./volunteer');
require('./payment');



