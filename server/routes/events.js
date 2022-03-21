const express = require("express");
const router = express.Router();

const Event = require("../models/event");
const User = require("../models/user");

/* GET events listing. */
//GET all events
router.get("/", async function (req, res) {
  try {
    const event = await Event.find().exec();
    if (!event)
      return res.status(404).json({ error: "No events at this time" });
    res.status(200).json({ event });
  } catch (error) {
    res.status(500).json({ error });
  }
});

//GET event by ID
router.get("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).exec();
    if (!event) return res.status(404).json({ error: "Event does not exist" });
    res.status(200).json({ event });
  } catch (error) {
    res.status(400).json({ error });
  }
});

//POST event(under the assumption input is correct)
router.post("/", async function (req, res) {
  const { event } = req.body;
  const newEvent = await Event.create(event);
  res.status(200).json({ newEvent });
});

router.put("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const { update } = req.body;
    const event = await Event.findByIdAndUpdate(id, update, { new: true });
    if (!event) {
      return res.status(404).json({ error: "Event does not exist", id });
    }
    res.status(200).json({ event });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ error: "Event does not exist", id });
    }
    res.status(200).json({ event });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/:id/attendance/:userID", async function (req, res) {
  try {
    const { id, userID } = req.params;
    const event = await Event.findById(id);
    if (event.attending.map((u) => u._id).includes(userID)) {
      return res
        .status(501)
        .json({ error: "User already attending", id, userID });
    }
    const user = await User.findById(userID);
    console.log(user);
    event.attending.push(user);
    console.log("added user");
    await event.save();
    console.log("saved user");
    res.status(200).json({ event });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
