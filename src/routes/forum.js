const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.addPost, (req, res) => {
  res.status(200).json(res.locals.posts);
})

router.get('/', postController.getPosts, (req, res) => {
  //respond with most recent 50 posts
  res.status(200).json(res.locals.posts); 
})

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;