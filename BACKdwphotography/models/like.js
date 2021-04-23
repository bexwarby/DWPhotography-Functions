/*
* models/like.js - Like model
*/

const mongoose = require("mongoose");

/* Schema */
const LikeSchema = new mongoose.Schema({
    likeClicked: Number, 
    photoID: String,
 }); 

/* Model creation */
module.exports = mongoose.model("Like", LikeSchema);