const mongoose = require('mongoose');

const eLearningSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    class: {
        type: Number,
        required: true,
    },
    chapter: {
        type: Number,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("ELearning", eLearningSchema);
