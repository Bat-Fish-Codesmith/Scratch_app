import React, { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';

//Login Page - useState Login & HTML Components
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const request = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({username, password})
      };
      console.log('=> Login.handleSubmit: username & password: read');

      const reponse = await fetch('/api/login', request);
      const data = await reponse.json();

      console.log('=> Login.handleSubmit: username & password: verified');

      if(data.verified) { 
        console.log('=> Login.handleSubmit: home redirect initiated');
        props.onFormSwitch('register');
      }
    } catch (error) {
      console.log('ERROR: Login.handleSubmit', 'err: ', error);
    }
  };

  return (
    <div className="auth-form-container" style={{transitionDelay: '100ms'}} >
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button 
          type="submit"
        >Login</button>
      </form>
      <button
        className="link-btn" 
        onClick={() => props.onFormSwitch('register')}>
          Dont have an account? Register here!
      </button>
    </div>
  );
};

export default Login;