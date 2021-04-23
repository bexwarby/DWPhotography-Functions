const express = require('express');
const router = express.Router();
const like = require('../controllers/like');

/* GET Lake District page. */
router.get('/nature', like.likeButton);

/* GET people page. */
router.get('/people', like.likeButton);

/* GET rowing page. */
router.get('/sports', like.likeButton);

module.exports = router;