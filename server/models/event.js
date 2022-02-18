const mongoose = require('mongoose');
const UserSchema = require('./user');

const EventSchema = new mongoose.Schema(
    {
        created: {
            type: Date,
            default: Date.now(),
        },
        title: {
            type: String,
            required: true,
        },
        desciption: {
            type: String,
            required: true,
        },
        attending: [{ user: [UserSchema] }],
        date: {
            type: Date,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        host: [{ user: [UserSchema] }],
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
        discord: {
            type: String,
        }
    }
)

module.exports = EventSchema;