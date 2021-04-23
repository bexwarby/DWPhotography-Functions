/**
 * controllers/contact.js - Contact controller
 */

const Contact = require("../models/contact");

const contact = {

    /* Posting results of contact form with date */
    contactCard: (req, res) => {
        console.log(req.body);
        const newContact = new Contact({
            contactName: req.body.contactName,
            contactEmail: req.body.contactEmail,
            textSubmitted: req.body.textSubmitted
        });

        newContact.save((err) => {
            if (err) {
                console.log(err);
                res.status(400).json({msg:"An error occured, please check the input"});
            return
            } 
                res.status(200).json({msg:"ok"});
        });
    },
}

module.exports = contact;