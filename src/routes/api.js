const express = require('express');
const path = require('path');

const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
const sessionController = require('../controllers/sessionController.js');

const router = express.Router();

//Wildcard pages are checked for session/cookies & are routed to login/home
router.get('/api', userController.login, cookieController.setCookie, sessionController.startSession,  (req, res) => 
  res.status(200).json({})
);

//login page invokes sessions, cookies, and login when invoked.
router.post('/auth', userController.login,  (req, res) => 
  res.status(200).json(res.locals.token)
);

router.post('/verify', userController.verify, (req, res) => 
  res.status(200).json(res.locals.verify)
);

router.post('/checkaccount', userController.checkAccount, (req, res) => 
  res.status(200).json({
    status: res.locals.user.length === 1 ? "User exists" : "User does not exist", userExists: user.length === 1
})
);

router.get('/forum', userController.forum,  (req, res) => 
  res.status(200).redirect('../client/components/Forum.jsx') //.send('=> passing through router.post/forum')
);

//registration page verifies user to be logged in and redirects to home. 
router.post('/register', userController.register, sessionController.isLoggedIn, (req, res) => 
  res.status(200).send('=> passing through router.post/home')
);

//home page get and post routes
//pending controller logic
router.get('/home',  userController.home, (req, res) => 
  res.status(200).json(res.locals.pages)
);

router.post('/home', userController.home, (req, res) => 
  res.status(200).json(res.locals.pages)
);

module.exports = router;