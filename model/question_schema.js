const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    userName: {
        type: String
    },
    userProfile: {
        type: String
    },
    answers: {
        type: Array
    },
    timestamp: {
        type: Number,
        required: true
    },
    reports: {
        type: Array
    },
    upvotedUsers: {
        type: Array
    },
    downvotedUsers: {
        type: Array
    },
    upvotes: {
        type: Number
    }
})

const Question = mongoose.model('questions', questionSchema);

module.exports = Question;
