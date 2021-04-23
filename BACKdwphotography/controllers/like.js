/**
 * controllers/like.js - Like controller
 */

const Like = require("../models/like");

const likeButton = {

    /* Like button on photos */
    likeButton: (req, res) => {
        const newLike = new Like({
            likeClicked: reg.body.likeClicked,
            photoID: req.body.photoID
         });
        // NEED TO LINK TO SPECIFIC PHOTO
         newLike.replaceOne((err) => {
            if (err) {
                console.log(err);
            }; return
        })
        // to get number of likes for the photo
        /* let numberLikes = db.collection.findOne({photoID, like})            */ 

    },
}

module.exports = likeButton;

