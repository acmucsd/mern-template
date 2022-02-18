const mongoose = require('mongoose');
const EventSchema = require('./event');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        // Hash password? Not sure exactly how to do
        password: {
            type: String,
            required: true,
        },
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
        discord: {
            type: String,
        },
        bio: {
            type: String,
        },
        interests: [{ interest: String }],
        // Class/year Ex: 4th year
        year: {
            type: Number,
        },
        // quarter Number or string?
        classes: [{ class: String, year: Number, quarter: String }],
        // Profile picture?
        pfp: {
            data: Buffer,
            contentType: String
        },
        // Events attending
        attending: [{ event: [EventSchema] }],
        // Events hosting
        hosting: [{ event: [EventSchema] }],


    }
);

module.exports = UserSchema;