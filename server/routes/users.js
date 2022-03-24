const express = require("express");
const router = express.Router();
const { upload } = require('../storage');

const User = require("../models/user");

const multer  = require('multer')
const fileSizeLimitInBytes = 2 * 1024 * 1024;
const storage = multer({ storage: multer.memoryStorage(), limits: {fileSize: fileSizeLimitInBytes} })

/* GET users listing. */
router.get("/", function (req, res, next) {
  const user = {
    name: "ACM Hack",
    email: "hack@acmucsd.org",
  };
  res.status(200).json({ user });
});

//POST user(under the assumption input is correct)
router.post("/", async function (req, res) {
  const { user } = req.body;
  const newUser = await User.create(user);
  res.status(200).json({ newUser });
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
router.put("/:id/picture", storage.single('image'), async function (req, res) {
  const id = req.params.id;
  const potentialUser = await User.findById(id);
  if(!potentialUser) {
    return res.status(404).json({error: "User does not exist", id });
  }
  const profilePicture = await upload(req.file, id);
  console.log(profilePicture);
  const user = await User.findByIdAndUpdate(id, {pfp: profilePicture}, {new: true});
  return res.status(200).json({ user });
});

module.exports = router;
