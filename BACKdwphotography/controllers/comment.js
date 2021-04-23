/**
 * controllers/comment.js - Comment controller
 */

const Comment = require("../models/comment");
/* const photoName = req.query.id; */

const comment = {

    /* Comment function on photos - SHOULD I ADD? */
    comment: (req, res) => {
        const newComment = new Comment({
            namePerson: req.body.namePerson,
            textComment: req.body.textComment,
            /* elementID: photoName */
        });
        // NEED TO LINK TO SPECIFIC PHOTO
        newComment.save((err) => {
            if (err) {
                console.log(err);
            }; return
        })            
    },
}

module.exports = comment;

