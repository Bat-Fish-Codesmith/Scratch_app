const express = require('express');
const User = require('../models/fishModel');

const app = express();
const cookieController = {};



cookieController.setCookie = (req, res, next) => {
  const thisNum = Math.floor(Math.random() * 100);
  res.cookie('secret', thisNum, {
    httpOnly: true,
    secure: true
  });
  next();
};

cookieController.setSSIDCookie = (req, res, next) => {
  const {username} = req.body;
  
  User.find({username})
    .then((data) => {
      const key = data[0]._id;
      return key; 
    })
    .then((ssid) => {
      res.locals.id = ssid;
      res.cookie('SSID', ssid, {
        httpOnly: true,
        secure: true
      });
      next();
    })
    .catch((err) => next({message: 'SSIDCookie Error'}));
};


module.exports = cookieController;
