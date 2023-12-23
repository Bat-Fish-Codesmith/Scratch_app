const express = require('express');
const app = express();
const path = require('path');
// const cookieParser = require('cookie-parser');

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


app.use('/', (req, res) => {
    return res.json('./index.html')
})

/**
 * 404 handler
 */
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

