const mongoose = require('mongoose')

/* Comments collection schema */
const commentSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    text: {
        type: String,
        required: true
    }
},
{
    /* Allows generation of createdAt and updatedAt */
    timestamps: true
})

module.exports = mongoose.model('comment', commentSchema)