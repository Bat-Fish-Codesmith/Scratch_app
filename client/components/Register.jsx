import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
      
      const response = await fetch('/api/register', reqOpts);
      const data = await response.json();

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
      <h1 className="title">WeLikeFish</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className={"inputBox"}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className={"inputBox"}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={"inputBox"}
        />
        <button 
          type="submit"
        >Register</button>
      </form>
        <Link to="/login">
          <button className="link-btn">    
            This is Fishy, I have an account!
          </button>
        </Link>
    </div>
  );
};

export default Register;