const express = require("express");
const mongoose = require("mongoose");

const UserSchema = require("../models/user");
const User = mongoose.model('User', UserSchema);
const { upload } = require('../storage');

const Event = require("../models/event");
// Is this the proper way to setup models?
// Ran into problems because we use the Schemas in each other
// so we can't export as models but we need the models for this

const router = express.Router();

const multer = require('multer')
const fileSizeLimitInBytes = 2 * 1024 * 1024;
const storage = multer({ storage: multer.memoryStorage(), limits: { fileSize: fileSizeLimitInBytes } })

/* GET users listing. */

//Get all events User with id is attending
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

//POST user(under the assumption input is correct)
router.post("/", async function (req, res) {
  const { user } = req.body;
  const newUser = await User.create(user);
  res.status(200).json({ newUser });
});

router.put("/:id", async function (req, res) {
  try {
    const { id, update } = req.params;
    const user = await User.findByIdAndUpdate(id, update, { new: true });
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

//UPLOAD PICTURE
router.put("/:id/picture", storage.single('image'), async function (req, res) {
  const id = req.params.id;
  const potentialUser = await User.findById(id);
  if (!potentialUser) {
    return res.status(404).json({ error: "User does not exist", id });
  }
  const profilePicture = await upload(req.file, id);
  console.log(profilePicture);
  const user = await User.findByIdAndUpdate(id, { pfp: profilePicture }, { new: true });
  return res.status(200).json({ user });
});

module.exports = router;
