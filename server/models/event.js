const mongoose = require('mongoose');
const { UserSchema } = require('./user');

const EventSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    attending: [UserSchema],
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    host: {
        type: UserSchema,
        required: true,
    },
    facebookUrl: {
        type: String,
    },
    instagramUrl: {
        type: String,
    },
    discordUrl: {
        type: String,
    },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
