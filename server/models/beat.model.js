const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beatSchema = new Schema({
    squares:{
        type: [[Number]],
        required: true
    },
    bpm:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        trim: true,
        unique: true,
        required: true
    }
}, {
    timestamps: true
});

const Beat = mongoose.model('Beat', beatSchema);

module.exports = Beat;