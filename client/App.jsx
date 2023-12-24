import React from 'react';
import { useState } from 'react'
import './App.css'
import Login from '../client/Login.jsx';
import Register from '../client/Register.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
//need to import the BrowserRouter, Route, Link from react-router-dom
//need to import Navbar file if we have it in a separate file
//need to import Home page file if in separate file
//need to import Login page if in separate file
//need to import Register page if in separate file 
//need to import Feed file if in separate file
//need to import Messaging file if in separate file
//import Chat if in separate file

// function App() {
//   const [count, setCount] = useState(0)

//   return (

// }

const App = () => {

  //routing login 
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Router>
    <div>
        <h1>hello!</h1>
        {/* <Navbar /> */}
        {/* <Router path="/home" exact component={Home} /> */}
        <Login />
        {/* <Router path="/login" component={Login} />
        <Router path="/register" component={Register} /> */}
        {/* <Route path="/feed" component={Feed} />
        <Route path="/messaging" component={Messaging} />
        <Route path="/chat"  component={Chat} />
      <div>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Login</button></Link>
      <Link to="/feed"><button>Login</button></Link>
      <Link to="/messaging"><button>Login</button></Link>
      <Link to="/chat"><button>Login</button></Link>
      </div> */}
       </div>
      </Router>
  );
};


export default App;
