const express = require('express');
const db = require('../models/fishModel');
const multer = require('multer');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage })

const app = express();
const postController = {};
let idIndex = 0;

// postController.addPost = async (req, res, next) => {
//   const { newMessage } = req.body;
//   //const { data } = req.files.image;
  
//   console.log(newMessage, "---------------");

//   try {
//     console.log('do we make it to top of addpost?')
//     //const text = req.body.text;
//     //const image = req.file ? req.file.path : null;
//     console.log(req.body)
//     // insert message and img into 
//     //const query = 'INSERT INTO post (message_id, content, post_picture) VALUES ($1, $2, $3)';

//     //idIndex++;

//     //const result = await db.query(query, [idIndex, text, image]);
//     //res.locals.post = result;

//     next();
//   } catch (err) {
//     console.log('error in postController.addPost');
//     return next(err);
//   } 
// };

// postController.getPosts = async (req, res, next) => {
//   try {
//     res.locals = await db.query(``);

//   } catch (err) {
//     console.log('error in postController.getPosts');
//     return next(err);
//   } finally {
//     next();
//   }
// };

// // app.post('/api/forum', (req, res) => {
// //   const text = req.body.text;
// //   const image = req.file ? req.file.path : null;

// //   public.query(
// //     'INSERT INTO messages (text, image) VALUES (?, ?)',
// //     [text, image],
// //     (error, results) => {
// //       if (error) {
// //         console.log('Error posting message:', error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //       } else {
// //         res.json({ success: true, message: 'Message posted successfully' });
// //       }
// //     }
// //   );
// // });


// module.exports = postController;

//const uploadMiddleware = upload.single('image');

postController.addPost = async (req, res, next) => {
  try {
    let text = req.body.text;
    //const image = req.file ? req.file.buffer : null;
    //text = 'I like fish';
    text = text;
    idIndex = Math.floor(Math.random()*100);
    console.log('this is addPost', req.body.text);
    console.log(text, 'this is text')

    const query = 'INSERT INTO post (message_id, content) VALUES ($1, $2)';
    const result = await db.query(query, [idIndex, text]);

    res.locals.post = result;
    next();
  } catch (err) {
    console.log('Error in postController.addPost:', err);
    return next(err);
  }
};

postController.getPosts = async (req, res, next) => {
  try {
    console.log('this is getPosts in postController. Do we make it?')
    const result = await db.query('SELECT * FROM post');
    res.locals.posts = result.rows;
    next();
  } catch (err) {
    console.log('Error in postController.getPosts:', err);
    return next(err);
  }
};

postController.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const text = req.body.text;

    const query = 'UPDATE post SET content = $1 WHERE message_id = $2';
    const result = await db.query(query, [text, id]);

    res.locals.post = result;
    next();
  } catch (err) {
    console.log('Error in postController.updatePost:', err);
    return next(err);
  }
};

postController.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM post WHERE message_id = $1', [id]);
    res.locals.post = result;
    next();
  } catch (err) {
    console.log('Error in postController.deletePost:', err);
    return next(err);
  }
};

module.exports = postController;