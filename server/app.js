const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const config = require("./config");

const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/events", eventsRouter);

dotenv.config();

mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
  });

app.listen(config.PORT, () => {
  console.log("Server started on port " + config.PORT);
});


module.exports = app;
