const express = require('express');
const db = require('../models/fishModel');

const app = express();
const postController = {};
let idIndex = 0;

postController.addPost = async (req, res, next) => {
  const { newMessage } = req.body;
  //const { data } = req.files.image;
  
  console.log(newMessage, "---------------");

  try {
    console.log('do we make it to top of addpost?')
    //const text = req.body.text;
    //const image = req.file ? req.file.path : null;
    console.log(req.body)
    // insert message and img into 
    //const query = 'INSERT INTO post (message_id, content, post_picture) VALUES ($1, $2, $3)';

    //idIndex++;

    //const result = await db.query(query, [idIndex, text, image]);
    //res.locals.post = result;

    next();
  } catch (err) {
    console.log('error in postController.addPost');
    return next(err);
  } 
};

postController.getPosts = async (req, res, next) => {
  try {
    res.locals = await db.query(``);

  } catch (err) {
    console.log('error in postController.getPosts');
    return next(err);
  } finally {
    next();
  }
};

// app.post('/api/forum', (req, res) => {
//   const text = req.body.text;
//   const image = req.file ? req.file.path : null;

//   public.query(
//     'INSERT INTO messages (text, image) VALUES (?, ?)',
//     [text, image],
//     (error, results) => {
//       if (error) {
//         console.log('Error posting message:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         res.json({ success: true, message: 'Message posted successfully' });
//       }
//     }
//   );
// });


module.exports = postController;