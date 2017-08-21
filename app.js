/*
   MongoDB Terms:
   collection = table
   document   = row
   field      = column
*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:Pineapple123@cluster0-shard-00-00-tfniz.mongodb.net:27017,cluster0-shard-00-01-tfniz.mongodb.net:27017,cluster0-shard-00-02-tfniz.mongodb.net:27017/db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

var userSchema = mongoose.Schema ({
  username: String,
  firstname: String,
  lastname: String,
  age: Number,
  created: {type: Date, default: Date.now}
});

var userModel = mongoose.model("UserModel", userSchema);

userModel.create({username: 'Marmee'},
  function (err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(doc);
    }
});

// var MongoClient = require('mongodb').MongoClient, assert = require('assert');
// //var mp = require('mongodb-promise');
//
// // Connection URL
// var url = 'mongodb://admin:Pineapple123@cluster0-shard-00-00-tfniz.mongodb.net:27017,cluster0-shard-00-01-tfniz.mongodb.net:27017,cluster0-shard-00-02-tfniz.mongodb.net:27017/db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
//
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//   insertDocs(db, function() {
//     db.close();
//   });
// });
//
// var insertDocs = function(db, callback) {
//
//   // Get document collection
//   var collection = db.collection('docs');
//
//   // Insert docs
//    collection.insert ({
//     name: 'Marc',
//     note: 'We did it'
//   });
//
//   collection.insert ({
//     name: 'Test',
//     note: 'One Two Three'
//   });
// }


