const express = require('express');
const config = require('./config');
const server = express();
const router = require('./api');

server.use('/', router);


server.listen(config.PORT, () => {
    console.log('Server started on port' + config.PORT);
});
