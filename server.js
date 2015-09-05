var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Item = require('./app/models/item.js');
var User = require('./app/models/user.js');
var _ = require('lodash');

var url = 'mongodb://localhost:27017/page_monitor';
var MongoClient = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost:27017/page_monitor');

var port = 8080;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

router.route('/items').get(function(req, res) {

    MongoClient.connect(url, function(err, db){
      var collection = db.collection('items');

      collection.find({}).toArray(function(err, items){

        res.send(buildItemsList(items));

      });
    });

});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

function buildItemsList(itemList){

  var items = {};

  itemList.forEach(function(item){

    if(!items[item._id]){
      items[item._id] = {
        name: item.item.name,
        id: item._id,
        stores:[],
        users:[]
      }
    }

    items[item._id].stores.push(
      {
        api: item.api,
        id: item.item.id,
        name: item.store,
        selector: item.selector,
        url: item.url,
        lastChecked: item.lastChecked,
        lastAvailable: item.lastAvailable || null,
        available: item.available || false
      }
    );

    _.forEach(items[item._id].notify, function(user){
        items[item._id].users.push(user);
    });

  });

  return _.map(items, function(item){
    return item;
  });

}
