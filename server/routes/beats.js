const express = require('express');
const router = express.Router();
let Beat = require('../models/beat.model');

router.get('/', function(req, res, next) {
  Beat.find()
    .then(beats => res.json(beats))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', function(req, res, next) {
    Beat.findById(req.params.id)
      .then(beat => res.json(beat))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', function(req, res, next) {
  const title = req.body.title;
  const squares = req.body.squares;
  const bpm = req.body.bpm;

  const newBeat = new Beat({sqaures, bpm, title});
  newBeat.save()
    .then(() => res.json('Success!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', function(req, res, next) {
    Beat.findById(req.params.id)
      .then((beat) => {
        beat.title = req.body.title;
        beat.squares = req.body.squares;
        beat.bpm = req.body.bpm;
  
        beat.save()
          .then(() => res.json('Success!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.delete('/:id', function(req, res, next) {
    Beat.findByIdAndDelete(req.params.id)
        .then(() => res.json('Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;