var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test',
{
items:[
    {
        name: "Item One",
        price: 30
    },
    {
        name: "Item Two",
        price: 65
    }
]});
});

module.exports = router;
