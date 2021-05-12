const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beatSchema = new Schema({
    squares:{
        type: [[Number]]
    },
    bpm:{
        type: Number
    },
    title:{
        type: String,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
});

const Beat = mongoose.model('Beat', beatSchema);

module.exports = Beat;