/*** React Routing Imports ***/
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, redirect, Link, Navigate } from 'react-router-dom';
import Register from './Register';

/*** React Pages ***/
import Home from "./Home.jsx"

/*** React Field Require***/
const required = (value) => {
  if(!value) {
    return (
      <div className="required-feedback">
        This field is required!
      </div>
    )
  }
}

/*** Login Page - useState Login & HTML Components ***/
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = true;

    try {
      user = await login(e.target);
      this.setUsername({ username });
    } catch (error) {
      this.setError({ error });
    }
  };

  return (
    <div className="auth-form-container" style={{transitionDelay: '100ms'}} >
      {user && (
          <Navigate to="/home" replace={true} />
        )}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name = "username"
          placeholder="Username"
          validations={[required]}
        />
        <input
          type="password"
          name = "password"
          placeholder="Password"
          validations={[required]}
        />
        <button 
          type="submit"
        >Login</button>
      </form>
        <Link to="/register">
          <button className="link-btn">    
            No account? Register here!
          </button>
        </Link>
    </div>
    
  );
};


export default Login;