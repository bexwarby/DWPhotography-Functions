const express = require('express');
const contact = require('../controllers/contact');
const blog = require('../controllers/comment');
const router = express.Router();
// const { findOne } = require('../models/contact').default;

/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

/* POST page */
router.post('/contact', contact.contactCard);
  
/* GET blog page */
router.get('/blog', blog.comment);


module.exports = router;


