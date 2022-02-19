const express = require('express');

const router = express.Router();

router.get('/events', (req, res) => {
    res.status(200).json({ hello: 'world'});
});

router.get('/users', (req, res) => {
    res.status(200).json({ hello: 'world'});
});

module.exports = router;