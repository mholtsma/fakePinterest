var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongoose.connect('mongodb://admin:Pineapple123@cluster0-shard-00-00-tfniz.mongodb.net:27017,cluster0-shard-00-01-tfniz.mongodb.net:27017,cluster0-shard-00-02-tfniz.mongodb.net:27017/db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.create = create;

module.exports = service;

function authenticate(username, password) {
  var deferred = Q.defer();

  db.users.findOne({ username: username }, function (err, user) {
    if (err) deferred.reject(err.name + ': ' + err.message);

    if (user && bcrypt.compareSync(password, user.hash)) {

      // Authentication successful
      deferred.resolve({
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: jwt.sign({ sub: user._id }, config.secret)
      });

    } else {

      // Authentication failed
      deferred.resolve();
    }
  });

  return deferred.promise;
}

function create(userParam) {
  var deferred = Q.defer();

  // validation
  db.users.findOne(
    { username: userParam.username },
    function (err, user) {
      if (err) deferred.reject(err.name + ': ' + err.message);

      if (user) {
        // username already exists
        deferred.reject('Username "' + userParam.username + '" is already taken');
      } else {
        createUser();
      }
    });

  function createUser() {
    // set user object to userParam without the cleartext password
    var user = _.omit(userParam, 'password');

    // add hashed password to user object
    user.hash = bcrypt.hashSync(userParam.password, 10);

    db.users.insert(
      user,
      function (err, doc) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve();
      });
  }

  return deferred.promise;
}
