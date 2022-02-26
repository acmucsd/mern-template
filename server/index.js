const express = require("express");
const config = require("./config");
const server = express();
const router = require("./api");

server.use("/", router);

server.listen(config.PORT, () => {
  console.log("Server started on port" + config.PORT);
});

// const express = require('express');
// const config = require('./config');
// const server = express();
// const router = require('./routes/users');
// const cors = require('cors');
// const mongoose = require('mongoose');

// server.use(cors());
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// server.use('/api', router);

// mongoose.connect(config.databaseUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB database');
// });

// server.listen(config.PORT, () => {
//     console.log('Server started on port' + config.PORT);
// });
