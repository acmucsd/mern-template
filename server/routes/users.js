const express = require("express");
const router = express.Router();

const User = require("../models/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const user = {
    name: "ACM Hack",
    email: "hack@acmucsd.org",
  };
  res.status(200).json({ user });
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
