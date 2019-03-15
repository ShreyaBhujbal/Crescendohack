var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
//mail
var nodemailer = require("nodemailer");
var app = express();

var eventCtrl = require("../controller/event");
var ngoCtrl = require("../controller/ngo");
//
// router
//   .route("/event")
//   .get(eventCtrl.getevents)
//   .post(eventCtrl.addEvent);
//
// router
//   .route("/ngo")
//   .get(ngoCtrl.getngo)
//   .post(ngoCtrl.addNgo);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { page: "Home", menuId: "home" });
});

  router.get('/about', function(req, res, next) {
    res.render('about', {page:'About Us', menuId:'about'});
  });
  
  router.get('/magic',function(req, res, next) {
    res.render('magic', {page:'EVENT', menuId:'magic'});
  });


  router
  .route('/login')
  .get(function(req, res, next) {
    res.render('login', {page:'LOGIN', menuId:'login'});
  })
  .post(function(req, res, next) {
    res.redirect('/NGO');
  })
  router.get('/NGO', function(req, res, next) {
    res.render('NGO', {page:'Add Event', menuId:'NGO'});
  });

router.route("/login").get(function(req, res, next) {
  res.render("login", { page: "LOGIN", menuId: "login" });
});
//.post(ngoCtrl.viewNgo);

  router
  .route('/done')
  .get(function(req, res, next) {
    res.render('done');
  })

  router
  .route('/searchNgo')
  .get(function(req, res, next) {
    res.render("register", { page: "REGISTER", menuId: "register" });
  })
  .post(eventCtrl.geteventsbycategory)
  

router.route("/searchNgo").get(function(req, res, next) {
  res.render("searchNgo", { page: "SEARCH NGO", menuId: "searchNgo" });
});

router.route("/donate").get(function(req, res, next) {
  res.render("donate");
});
//mail

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "sanesassesor@gmail.com",
    pass: "sanes4ever"
  }
});

router.route("/contact").get(function(req, res, next) {
  res.render("mail");
});

router.route("/contact/send").get(function(req, res) {
  //code to send e-mail.
  //Will be shown soon.
  var mailOptions = {
    to: req.query.to,
    subject: req.query.subject,
    text: req.query.text
  };
  console.log(req);
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Message sent: " + response.message);
      res.send("sent");
    }
  });
});

module.exports = router;
