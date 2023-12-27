const { User, db, Page } = require('../models/fishModel.js');
const bcrypt = require('bcrypt');
const express = require('express');


const userController = {};


userController.login = async (req, res, next) => {
  const {username, password} = req.body;
  
  try {
  //   const userVerify = await User.findOne({'username': username});
    console.log('we found user');

  //   if(!userVerify) {
  //     res.status(500).json({ message: 'username not found' });
  //     return next();
  //   }
    
  //   if(await bcrypt.compare(password, userVerify.password)) {
  //     res.locals.verify = true;
  //     res.locals.userId = userVerify._id;
  //     res.json({verified: true});
  //     return next();
  //   } else {
  //     res.status(500).json({ message: 'wrong password' });
  //     return next();  
  //   }
  // } catch (error) {
  //   next({ message: 'Could not verify user' });
  } catch (error) {
    res.status(500).json({ message: 'login page error' });
  }
};

userController.register = async (req, res, next) => {
  const {username, password, name} = req.body;

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('registration => database confirmed');
    const user = new User({
      name: name,
      username: username,
      password: hashedPassword,
    });
    await user.save();
    res.locals.userId = user._id;
    res.json({message: 'username & password loaded', verified: true});
    return next();
  }catch (error) {
    res.status(500).json({ message: 'couldnt register' });
  }
};

userController.home = async (req, res, next) => {
  console.log('userController.home----------reached');

  try {
    const userId = res.locals.userId;
    let pages = await Page.find({ userId });
    if (pages.length === 0) {
      const newPage = new Page({
        title: 'Default Page',
        notes: '',
        collapsed: false,
        userId: userId
      });
      await newPage.save();
      pages = [newPage];
    }
    res.locals.pages = pages;
    next();
  } catch (error) {
    next(error);
  }
};

userController.checkSession = (req, res, next) => {
  if (req.locals.userId) {
    res.status(200);
    return next();
  } else {
    return next({message: 'error at checksession'});
  }
};

userController.forum = async (req, res, next) => {
    try {
    console.log("=> Forum directed")
    res.status(200);
    return next();
    } catch (error) {
      next(error);
    }
};

module.exports = userController;




// const newUser = await User({
//   'username': req.body.username,
//   'password': req.body.password
// });

// newUser.save((err, userDoc) => {
//   console.log('HELLLOOOOOOOO');
//   if (err) return next({message: 'usename & password not saved'});
//   res.locals.newStudent = userDoc;
//   return next();
// });




// const newUser = new User ({
//   username: req.body.username,
//   password: req.body.password
// });
// console.log(newUser);
// newUser.save((err, userDoc) => {
//   if(err) return next ({message: 'usename & password not saved'});
//   res.locals.newUser = userDoc;
//   console.log("----------usersaved: ", userDoc);
//   return next();
// });