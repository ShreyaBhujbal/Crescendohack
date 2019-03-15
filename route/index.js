var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

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
  router.get('/', function(req, res, next) {
    res.render('index', {page:'Home', menuId:'home'});
  });

  router.get('/about', function(req, res, next) {
    res.render('about', {page:'About Us', menuId:'about'});
  });
  router.get('/NGO', function(req, res, next) {
    res.render('NGO', {page:'Add Event', menuId:'NGO'});
  });

  router
  .route('/login')
  .get(function(req, res, next) {
    res.render('login', {page:'LOGIN', menuId:'login'});
  })
  .post(ngoCtrl.viewNgo)

  router
  .route('/register')
  .get(function(req, res, next) {
    res.render('register', {page:'REGISTER', menuId:'register'});
  })
  .post(ngoCtrl.addNgo)

  router
  .route('/searchNgo')
  .get(function(req, res, next) {
    res.render('searchNgo', {page:'SEARCH NGO', menuId:'searchNgo'});
  })
  

module.exports = router;
