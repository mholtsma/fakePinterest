var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var mongoose = require('mongoose');  // Load mongoose package
 
// Connection URL 
var url = 'mongodb://localhost:27017/fakePinterest';

// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  //db.close();
});

var fakePinterestSchema = new mongoose.Schema({ // Create schema
  name: String,
  note: String,
})

// Create model based on schema
var fakePinterest = mongoose.model('fakePinterest', 
                                   fakePinterestSchema);
// Create in memory
var testdb = new fakePinterest({name: 'Marc', note: 'We did it!'});

testdb.save(function(err) {  					// Save to db
  if (err) console.log(err);
  else console.log(testdb);
});