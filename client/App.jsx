import React from 'react';
import { useState } from 'react'
import './App.css'
import Login from '../client/Login.jsx';
import Register from '../client/Register.jsx';
import Forum from './components/Forum.jsx';
import { BrowserRouter, Routes, Router, redirect, useSearchParams } from 'react-router-dom';

//need to import the BrowserRouter, Route, Link from react-router-dom
//need to import Navbar file if we have it in a separate file
//need to import Home page file if in separate file
//need to import Feed file if in separate file
//need to import Messaging file if in separate file
//import Chat if in separate file

// function App() {
//   const [count, setCount] = useState(0)

//   return (

// }

const App = (props) => {
  //routing login 
  //const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  //console.log(req.params)

  // const changeRoute = {}

  // changeRoute.login = () => {
  //   let path = "http://lovalhost:8080/Login"; 
  //   console.log("redirect invoked")
  //   return redirect(path);
  // };

  // changeRoute.register = () => {
  //   let path = "http://lovalhost:8080/Register"; 
  //   console.log("redirect invoked")
  //   return redirect(path);
  // };

  // changeRoute.forum = () => {
  //   let path = "http://lovalhost:8080/Forum"; 
  //   console.log("redirect invoked")
  //   return redirect(path);
  // };

    try{
      console.log("hello")

    } catch (error) {
      console.log('ERROR: handleButton', 'err: ', error);
    }
  


  return (

    <div>
    <h1>hello!</h1>
      <Forum />
      {/* <button onClick = {() => element('/Login')}>Login</button>
      <button onClick = {handleButton()}>Register</button> */}
      {/* <button onClick = {() => component(<Login />)}>Forum</button> */}
        {/* <Navbar />
        {/* <Router path="/home" exact component={Home} /> */}
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

  );
};


export default App;
