var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Item = require('./app/models/item.js');
var User = require('./app/models/user.js');

mongoose.connect('mongodb://localhost:27017/page_monitor');

var port = 8080;

var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/items')

  .get(function(req, res) {
    Item.find(function(err, items){
      if(err)
        res.send(err);

        res.json(items);

    });
});

app.use('/api', router);


app.listen(port);
console.log('Magic happens on port ' + port);
