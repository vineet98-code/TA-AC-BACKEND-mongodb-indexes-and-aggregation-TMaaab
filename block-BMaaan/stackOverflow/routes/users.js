var express = require('express');
var router = express.Router();
var Stack = require('../models/stack');
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.render('index');
});
router.post('/', function (req, res, next) {
  Stack.create(req.body, (err, user) => {
    console.log(user);
  });
});

module.exports = router;