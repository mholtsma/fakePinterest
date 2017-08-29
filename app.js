/*
   MongoDB Terms:
   collection = table
   document   = row
   field      = column
*/

var q = require('q');
var mongoose = require('mongoose');
var app = require('express')();              // Allows data to be exposed. app is an instance?

mongoose.connect('mongodb://admin:Pineapple123@cluster0-shard-00-00-tfniz.mongodb.net:27017,cluster0-shard-00-01-tfniz.mongodb.net:27017,cluster0-shard-00-02-tfniz.mongodb.net:27017/db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

var userSchema = mongoose.Schema ({
  username: String,                         // All of these are left blank unless manually filled in - no default values
  firstname: String,
  lastname: String,
  age: Number,
  created: {type: Date, default: Date.now}  // Created with a default value
}, {collection: "users"});                  // Name of the collection - override mongoose naming convention

var usersArray = [
  {_id: "123", username: "me"},
  {_id: "456", username: "you"}
];

app.get("/login", function (request, response) {
  response.send(usersArray);
});

var userModel = mongoose.model("UserModel", userSchema);

// createUser({username: "PromiseTest"})
//   .then(function (user) {
//     console.log(user);
//   });

// findAllUsers()
//   .then(function (users) {
//     console.log(users);
//   });

// findByUsername("Marmee")
//   .then(function (user) {
//     console.log(user);
//   });

// findById("599a65f26f1f63238c391510")
//   .then(function (user) {
//      console.log(user);
// });

// updateUser("599a65f26f1f63238c391510", {firstname: "Marc", lastname: "Huimee", age: "0"})
//   .then(function (status) {
//     console.log(status);
//   });

// removeUser("59a4b1d071e9351ce06565ca")
//   .then(function (status) {
//     console.log(status);
//   });

function createUser(user) {
  return userModel.create(user);
}

function findAllUsers() {
  return userModel.find();      // Returns promise
}

function findByUsername(user) {
  return userModel.find({username: user});
}

function findById(id) {
  return userModel.findById(id);
}

function updateUser(id, newValues) {
  return userModel.update({_id: id}, {$set: newValues});
}

function removeUser(id) {
  return userModel.remove({_id: id});
}

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


