import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Registration Page - useState Registration & HTML Components

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (data) => {
    data.preventDefault();

    try{
      const reqOpts = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({username, password, name})
      };
      console.log('=> Login.handleSubmit: username & password: read');
      
      const reponse = await fetch('/api/register', reqOpts);
      const data = await reponse.json();

      console.log('=> Login.handleSubmit: username & password: verified');

      if(data.verified) { 
        console.log('=> Login.handleSubmit: home redirect initiated');
        props.onFormSwitch('home');
        navigate('/api/home'); 
      }
    } catch (error) {
      console.log('ERROR: Register.handleSubmit', 'err: ', error);
    }
  };


  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <button type="submit"
          onSubmit={() => props.onFormSwitch('home')}
        >Register</button>
      </form>
      <button2 
        className="link-btn" 
        onClick={() => props.onFormSwitch('login')}>I made a terrible mistake, I have an account!</button2>
    </div>
  );
};

export default Register;