const router = require("express").Router();
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    user: { type: ObjectId, required: true },
    exerciseName: { type: String, required: true },
    exercisePR: { type: Number, date: { type: Date }},
    exercisePRHistory: [{ type: Number, date: { type: Date } }],
    exerciseGoal: { type: Number }
}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;