var mongoose = require('mongoose');
var userSchema = require('./user.schema');
var db = require('./database')
var userModel = mongoose.model("UserModel", userSchema); // Create user model based on user schema

userModel.createUser = createUser;                       // Add function to model
module.exports = userModel;                              // Importable functions

function createUser(user) {
  return userModel.create(user);                         // Pass in user object, returns a Promise
}

// userModel.create({username: 'Marmee'},
//   function (err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log(doc);
//     }
//   }
// );
