var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var obj = JSON.parse(fs.readFileSync('../data/users.json', 'utf8'));
  res.send(obj);
});
router.get('/:id', function(req, res, next) {
  var obj = JSON.parse(fs.readFileSync('../data/users.json', 'utf8'));
  res.send(obj.find(item => item.id == req.params.id));
});
router.post('/', function(req, res, next) {
  var obj = JSON.parse(fs.readFileSync('../data/users.json', 'utf8'));
  obj.push(req.body);
  res.send(obj);
});

module.exports = router;
