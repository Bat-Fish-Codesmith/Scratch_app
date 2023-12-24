const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');
// const cookieParser = require('cookie-parser');

const PORT = 3000;

//require controllers
// const sessionController = require('./controllers/sessionController');
// const stretchController = require('./controllers/stretchController');

//require routers
// const requestRouter = require('./router/request');
// const oauthRouter = require('./router/oauth');
// const apiRouter = require('./router/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());


app.use('/', apiRouter);

/**
 * 404 handler
 */
app.use('/*', (req,res) => {
  res.status(404).send('Page Not Found');
});

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

