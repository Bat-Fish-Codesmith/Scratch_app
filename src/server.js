const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');
const forumRouter = require('./routes/forum');
//const cookieParser = require('cookie-parser');

const PORT = 3000;

//require controllers
// const sessionController = require('./controllers/sessionController');
// const stretchController = require('./controllers/stretchController');

//require routers
// const requestRouter = require('./router/request');
// const oauthRouter = require('./router/oauth');
// const apiRouter = require('./router/api');

console.log('do we make it to server');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());


//app.use('/', apiRouter);
app.use('/forum', forumRouter);

// app.get('/api/forum', (req, res) => {
//   public.query('SELECT * FROM messages', (error, results) => {
//     if (error) {
//       console.log('Error getting messages:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }  else {
//       res.json(results);
//     }
//   });
// });

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

// app.put('/api/forum/:id', (req, res) => {
//   const id = req.params.id;
//   const newText = req.body.text;

//   public.query('UPDATE messages SET text = ? WHERE id = ?', [newText, id], (error, results) => {
//     if (error) {
//       console.log('Error updating message:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json({ success: true, message: 'Message updated successfully' });
//     }
//   });
// });

// app.post('/api/forum/like/:id', (req, res) => {
//   const id = req.params.id;

//   public.query('UPDATE messages SET likes = likes + 1 WHERE id = ?', [id], (error, results) => {
//     if (error) {
//       console.log('Error liking message:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json({ success: true, message: 'Message liked successfully' });
//     }
//   });
// });

// app.delete('/api/forum/:id', (req, res) => {
//   const id = req.params.id;

//   public.query('DELETE FROM messages WHERE id = ?', [id], (error, results) => {
//     if (error) {
//       console.log('Error deleting message:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json({ success: true, message: 'Message deleted successfully' });
//     }
//   });
// });

/**
 * 404 handler
 */
// app.use('/*', (req,res) => {
//   res.status(404).send('Page Not Found');
// });

/**
 * Global error handler
 */ 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'ERROR: Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return next({message: 'error at a global level'});
});

app.listen(PORT, () => console.log('=> Listening on Port: 3000')); // -> http://localhost:3000/

