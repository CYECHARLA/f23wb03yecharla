var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('board', { title: 'Board Display' });
});

// Inside the GET router for "board"
router.get('/', (req, res) => {
  let query = req.query;
  console.log(`rows: ${query.rows}`);
  console.log(`cols: ${query.cols}`);
  res.render('board', { title: 'Board Display', query });
});


module.exports = router;
