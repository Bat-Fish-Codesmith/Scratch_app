import React from 'react';
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Forum from './components/Forum';
// import FishInfo from './components/FishInfo';

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

function App() {
  return (
    <><h1>hello!</h1><BrowserRouter>

      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/Forum" component={Forum} />
        {/* <Route path="/FishInfo" component={} /> */}
        {/* <div>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Login</button></Link>
          <Link to="/feed"><button>Login</button></Link>
          <Link to="/messaging"><button>Login</button></Link>
          <Link to="/chat"><button>Login</button></Link>
        </div> */}
      </div>
    </BrowserRouter></>      

  );
};


export default App
