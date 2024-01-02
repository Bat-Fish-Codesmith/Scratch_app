const db = require("./assets/database")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecretKey = process.env.JWT_SECRET_KEY || "dsfdsfsdfdsvcsvdfgefg"

const userController = {};


userController.login = async (req, res) => {

  try{

  const {username, password} = req.body;
  console.log("=> Username ", username, password)

  const user = db.users.find(u => u.username === username);

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user.id }, jwtSecretKey, { expiresIn: '1h' });
    res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
};


userController.verify = (req, res) => {
  const tokenHeaderKey = "jwt-token";
  const authToken = req.headers[tokenHeaderKey];

  try {
    const verified = jwt.verify(authToken, jwtSecretKey);
    if (verified) {
      console.log(" => userController.verify has verified")
      return next ();
    } else {
      return res.status(401).json({ status: "invalid auth", message: "error" });
    }
  } catch (error) {
    return res.status(401).json({ status: "invalid auth", message: "error" });
  }
};

userController.checkAccount = (req, res) => {
  const { username } = req.body

  console.log(req.body)

  const userExists = db.users.some(u => u.username === username);

  console.log(userExists)
  
  res.json({ userExists });
}

userController.register = async (req, res, next) => {
  
  try {
    const {username, password, name} = req.body;
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('registration => database confirmed');

    const user = new User({
      name: name,
      username: username,
      password: hashedPassword,
    });

    await user.save();
    res.locals.userId = user._id;

    res.status(200).json({message: 'username & password loaded', verified: true});
  } catch (error) {
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
  }
};

module.exports = userController;