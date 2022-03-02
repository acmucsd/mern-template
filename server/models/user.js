const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        // Hash password
        password: {
            type: String,
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
        bio: {
            type: String,
        },
        interests: [String],
        // Class/year Ex: 4th year
        gradYear: {
            type: Number,
        },
        // quarter Number or string?
        classes: [{ class: String, year: Number, quarter: String }],
        // Profile picture, can do AWS also
        pfp: {
            data: Buffer,
            contentType: String
        },

    }
);

module.exports = UserSchema;