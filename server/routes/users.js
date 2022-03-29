const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");

const { upload } = require("../storage");
const { User } = require("../models/user");

const fileSizeLimitInBytes = 2 * 1024 * 1024;
const saltRounds = 7;
const storage = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: fileSizeLimitInBytes },
});

const router = express.Router();

/* GET users listing. */

//Get all events User with id is attending
router.get("/:id/events", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user === null) {
      return res.status(404).json({ error: "User not found" });
    }
    const events = await Event.find({ "attending._id": id }).exec();
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
    if (user === null) {
      return res.status(404).json({ error: "User not found" });
    }
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
  newUser.password = await bcrypt.hash(newUser.password, saltRounds);
  await newUser.save();
  res.status(200).json({ newUser });
});

router.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;
    const potentialUser = await User.findOne({ email });
    if (!potentialUser) {
      return res
        .status(404)
        .json({ error: "Email does not exist", email, password });
    }
    const isMatch = await bcrypt.compare(password, potentialUser.password);
    if (!isMatch) {
      return res
        .status(404)
        .json({ error: "Password does not match", email, password });
    }
    res.status(200).json({ potentialUser });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const { update } = req.body;
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
router.put("/:id/picture", storage.single("image"), async function (req, res) {
  const id = req.params.id;
  const potentialUser = await User.findById(id);
  if (!potentialUser) {
    return res.status(404).json({ error: "User does not exist", id });
  }
  const profilePicture = await upload(req.file, id);
  console.log(profilePicture);
  const user = await User.findByIdAndUpdate(
    id,
    { pfp: profilePicture },
    { new: true }
  );
  return res.status(200).json({ user });
});

module.exports = router;
