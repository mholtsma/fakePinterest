/*
Defines and handles all routes and endpoints for API that relates to users
 */

var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('../../src/services/user.service');

// Routes
router.post('/signup', signup);

module.exports = router;

// Route implementations
function authenticate(req, res) {
  userService.authenticate(req.body.username, req.body.password)
    .then(function (user) {
      if (user) {
        res.send(user);                                            // Authentication successful
      } else {
        res.status(400).send('Username or password is incorrect'); // Authentication failed
      }
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
}

function register(req, res) {
  userService.create(req.body)
    .then(function () {
      res.sendStatus(200);
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
}
