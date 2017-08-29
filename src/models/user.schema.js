var mongoose = require("mongoose");

var userSchema = mongoose.Schema ({
  username: String,                         // All of these are left blank unless manually filled in - no default values
  firstname: String,
  lastname: String,
  age: Number,
  created: {type: Date, default: Date.now}  // Created with a default value
}, {collection: "users"});                  // Name of the collection - override mongoose naming convention

module.exports = userSchema;                // Import elsewhere to use schema
