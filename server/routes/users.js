const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

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
router.post('/register', async function(req, res, next) {
  try {
    const { email, username, name, password } = req.body;

    // TODO: Verify duplicate username and email

    // Check if there is a duplicate username
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error_message: 'An account with the username already exists.',
        user: existingUser
      });
    }

    // Check if there is a duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error_message: 'An account with the email already exists.',
        user: existingUser
      });
    }

    // Save new user to mongoDB
    const newUser = new User({
      email,
      username,
      name,
      password
    });

    const savedUser = await newUser.save();

    return res.status(200).json({
      success: true,
      error_message: null,
      user: newUser
    });
  }
  catch (err) {
    res.status(500).send();
  }
});

// User login
router.get('/login', function(req, res, next) {
  // 
});

module.exports = router;
