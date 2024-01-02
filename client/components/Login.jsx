/*** React Routing Imports ***/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


/*** Login Page - useState Login & HTML Components ***/
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserNameError("")
    setPasswordError("")

    if("" === username) {
      setUserNameError("Please enter a valid username")
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username)) {
      setUserNameError("Please enter a valid username")
      return
    }

    if("" === password) {
      setPasswordError("Please enter a password")
      return
    }

    if (password.length < 4) {
      setPasswordError("The password must be 4 characters or longer")
      return
    }

    checkAccountExists(accountExists => {
      if (accountExists) {
        logIn()
      } else { if (window.confirm("An account does not exist with this username address: " + username + ". Do you want to create a new account?")) {
              logIn()
          }
        };
    })

  const checkAccountExists = (callback) => {
    fetch("http://localhost:3000/checkaccount", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({username})
    })
    .then(res => res.json())
    .then(res => {
        callback(res.userExists)
    })
    .catch(error => {
      console.error('Error checking account: ', error);
    })
  };

  const logIn = () => {
    fetch("http://localhost:3000/auth", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(res => {
        if ('success' === res.locals.message) {
            localStorage.setItem("user", JSON.stringify({username, token: res.locals.token}))
            props.setLoggedIn(true)
            props.setUsername(username)
            navigate("/home")
        } else {
            window.alert("Wrong username or password")
        }
      })
      .catch(error => {
        console.error('Login error:', error);
      })
    }
    // const loggedIn = true;

    // if (loggedIn) {
    //   localStorage.removeItem("user")
    //   props.setLoggedIn(true)
    // } else {
    //   navigate("/login")
    // };
  };

  return (
    <div className="auth-form-container" style={{transitionDelay: '100ms'}} >
      <h1 className="title">WeLikeFish</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name = "username"
          placeholder="Username"
          onChange = {(e) => setUsername(e.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{userNameError}</label>
        <input
          type="password"
          name = "password"
          placeholder="Password"
          onChange = {(e) => setPassword(e.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
        <button 
          type="submit"
        >Login</button>
      </form>
        <Link to="/register">
          <button className="link-btn">    
            No account? Cast here!
          </button>
        </Link>
    </div>
    
  );
};


export default Login;