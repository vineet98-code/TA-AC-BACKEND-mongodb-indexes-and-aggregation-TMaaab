var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var stackSchema = new Schema({
    users : { type: String, required: true },
    questions :{ type: String },
    answers: { type: Number, default: 0 },
    replies: { type: Number, default: 0 },
    questionsUpvote: { type: Number, default: 0 },
    questionsDownvote: { type: Number, default: 0 },
    answersUpvote: { type: Number },
    answersDownvote: { type: Number },
    repliesUpvote: { type: Number },
    repliesDownvote: { type: Number },
    tagsQuestion: [{ type: String }],
    viewsQuestion: { type: String },
    reputation: { type: Number },
    
}, {timestamps: true });

stackSchema.index({ username: 1, unique: true });
stackSchema.index({ email: 1, unique: true });

// This Book is used to perform the crud operation and capture it in router book.js
module.exports = mongoose.model('Stack', stackSchema); // model is equivalent to colletions