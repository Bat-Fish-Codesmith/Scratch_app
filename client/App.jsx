import React from 'react';
import { useState } from 'react'
import './App.css'
import Forum from "./components/Forum.jsx"
import Home from "./components/Home.jsx"
import FishData from "./components/FishData.jsx"
import Login from "./components/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import Register from "./components/Register.jsx"

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
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/forum" exact component={Forum} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>

    {/* // <BrowserRouter>
    <Forum />
    //   <div>
    //     <Navbar />
    //     <Route path="/" exact component={Home} />
    //     <Route path="/login" component={Login} />
    //     <Route path="/register" component={Register} />
    //     <Route path="/feed" component={Feed} />
    //     <Route path="/messaging" component={Messaging} />
    //     <Route path="/chat"  component={Chat} />
    //     <div>
    //       <Link to="/login"><button>Login</button></Link>
    //       <Link to="/register"><button>Login</button></Link>
    //       <Link to="/feed"><button>Login</button></Link>
    //       <Link to="/messaging"><button>Login</button></Link>
    //       <Link to="/chat"><button>Login</button></Link>
    //     </div>
    //   </div>
    // </BrowserRouter>       */}

  );
};


export default App;
