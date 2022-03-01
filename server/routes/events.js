const express = require("express");
const router = express.Router();

const Event = require("../models/event");

/* GET events listing. */
router.get("/", function (req, res, next) {
  const event = {};
  res.status(200).json({ event });
});

router.put("/:id", async function (req, res) {
  try {
    const { id, update } = req.params;
    const event = await Event.findByIdAndUpdate(id, update);
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

module.exports = router;
