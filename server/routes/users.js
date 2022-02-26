const express = require("express");
const router = express.Router();

let Event = require("../models/event.model");
let User = require("../models/user.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const user = {
    name: "ACM Hack",
    email: "hack@acmucsd.org",
  };
  res.status(200).json({ user });
});

router.put("/events/:id", function (req, res) {
  try {
    const { id, update } = req.params;
    var thisEvent = Event.findByIdAndUpdate(id, update);
    if (!thisEvent) {
      return res.status(404).json({ error: `Event Do Not Exist`, id });
    }
    res.status(200).json({ event: thisEvent });
  } catch {
    res.status(500).json({ error: `Server Process Error` });
  }
});

router.put("/users/:id", function (req, res) {
  try {
    const { id, update } = req.params;
    var thisUser = User.findByIdAndUpdate(id, update);
    if (!thisUser) {
      return res.status(404).json({ error: `User Do Not Exist`, id });
    }
    res.status(200).json({ user: thisUser });
  } catch {
    res.status(500).json({ error: `Server Process Error` });
  }
});

router.delete("/events/:id", function (req, res) {
  Event.findByIdAndDelete(req.params.id)
    .then((event) => res.status(200).json({ event }))
    .catch((err) => res.status(400).json({ error: err }));
});

router.delete("/users/:id", function (req, res) {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
