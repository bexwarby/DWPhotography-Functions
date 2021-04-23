/*
* models/comment.js - Comment model
*/
const mongoose = require("mongoose");

/* Schema */
const CommentSchema = new mongoose.Schema({
    textComment: {
        type: String
    },
    elementID: {
        type: String
    },
    namePerson: {
        type: String
    },
    dateSubmitted: {
        type: Date,
        default: Date.now,
    },
 }); 

/* Model creation */
module.exports = mongoose.model("Comment", CommentSchema);