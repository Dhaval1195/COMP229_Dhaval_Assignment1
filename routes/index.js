/*
Dhavalbhai Patel
301240436
*/



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* My About Aage. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* My Projects Page. */
router.get('/project', function(req, res, next) {
  res.render('projects', { title: 'project' });
});

/* My Services Page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
module.exports = router;

/* My Contact Page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;
