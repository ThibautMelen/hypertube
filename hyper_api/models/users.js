const mongoose = require('mongoose')

/* Users collection schema */
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        enum: ['english', 'french']
    },
    profilePic: {
        type: String,
        required: true
    },
    validationCode: {
        type: String,
        required: true
    },
    validated: {
        type: Boolean,
        default: false
    },
    watchedShows: {
        type: [mongoose.Types.Mixed],
        default: []
    }
},
{
    /* Allows generation of createdAt and updatedAt */
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)