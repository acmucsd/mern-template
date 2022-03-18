const express = require("express");
const mongoose = require("mongoose");

const UserSchema = require("../models/user");
const User = mongoose.model('User', UserSchema);

const EventSchema = require("../models/event");
const Event = mongoose.model('Event', EventSchema);
// Is this the proper way to setup models?
// Ran into problems because we use the Schemas in each other
// so we can't export as models but we need the models for this

// app.js/index.js setup stuff


const router = express.Router();


/* GET users listing. */


//FIX
// Get all events User with id is attending
router.get("/:id/events", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const events = await Event.find({ attending: user }).exec();
    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Get User by id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Get all Users
router.get("/", async (req, res, next) => {
  try {
    const user = await User.find().exec();

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.put("/:id", async function (req, res) {
  try {
    const { id, update } = req.params;
    const user = await User.findByIdAndUpdate(id, update);
    if (!user) {
      return res.status(404).json({ error: "User does not exist", id });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: "User does not exist", id });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
