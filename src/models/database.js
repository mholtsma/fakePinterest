var q = require('q');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://admin:Pineapple123@cluster0-shard-00-00-tfniz.mongodb.net:27017,cluster0-shard-00-01-tfniz.mongodb.net:27017,cluster0-shard-00-02-tfniz.mongodb.net:27017/db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
mongoose.Promise = q.Promise;

module.exports = db;
