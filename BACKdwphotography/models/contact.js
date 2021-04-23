/*
* models/contact.js - Contact model
*/
const mongoose = require("mongoose");

/* Schema */
const ContactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    textSubmitted: {
        type: String,
        required: true
    },
    dateSubmitted: {
        type: Date,
        default: Date.now,
    }
});

/* Model creation */
module.exports = mongoose.model("Contact", ContactSchema);