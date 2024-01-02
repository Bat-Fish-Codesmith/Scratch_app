const { Session } = require('../models/fishModel');
//const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const express = require('express');

const sessionController = {};
const app = express();

app.use(cookieParser());

sessionController.isLoggedIn = (req, res, next) => {
  const currCookie = req.cookies.SSID;
  Session.find({cookieId: currCookie})
    .then((data) => {
      if (data.length > 0) {
        res.locals.page = '../src/components/home.jsx';
      } else res.locals.page = '../src/login.jsx';
      return next();
    })
    .catch((err) => next(err));
};

sessionController.startSession = (req, res, next) => {
  Session.create({cookieId: res.locals.id})
    .then((data) => {
      console.log('START SESSION received data_______ ', data);
      next();
    })
    .catch((err) => next(err));
};


module.exports = sessionController;
