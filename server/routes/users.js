const express = require("express");
const router = express.Router();

const Event = require("../models/event.model");
const User = require("../models/user.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const user = {
    name: "ACM Hack",
    email: "hack@acmucsd.org",
  };
  res.status(200).json({ user });
});

router.put("/events/:id", async function (req, res) {
  try {
    const { id, update } = req.params;
    const event = await Event.findByIdAndUpdate(id, update);
    if (event) {
      return res.status(404).json({ error: "Event does not exist", id });
    }
    res.status(200).json({ event });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put("/users/:id", async function (req, res) {
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

router.delete("/events/:id", async function (req, res) {
  await Event.findByIdAndDelete(req.params.id)
    .then((event) => res.status(200).json({ event }))
    .catch((err) => res.status(400).json({ error: err }));
});

router.delete("/users/:id", async function (req, res) {
  await User.findByIdAndDelete(req.params.id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
