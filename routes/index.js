var express = require('express');
var router = express.Router();

const launchTime = new Date('12/29/2020 10:00').getTime()

/* GET home page. */
router.get('/', function(req, res, next) {
  const currentTime = new Date().getTime()
  const numberOfMilliseconds = parseInt(launchTime - currentTime)
  res.render(
    'index', 
    { title: 'My Awesome Game', countDown: numberOfMilliseconds }
  );
});

module.exports = router;
