const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = {
    name: 'ACM Hack',
    email: 'hack@acmucsd.org'
  }
  res.status(200).json({ user });
  res.send("Got get request.");
});

// User registration
router.post('/register', function(req, res, next) {
  const { username, name, password, passwordConfirm } = req.body;
});

module.exports = router;
