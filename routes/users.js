/*
Dhavalbhai Patel
301240436
*/


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholders');
});

module.exports = router;
