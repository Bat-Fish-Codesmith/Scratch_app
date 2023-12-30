/*** React Routing Imports ***/
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';

/*** React Pages***/
import Forum from "./components/Forum.jsx"
import Home from "./components/Home.jsx"
import FishData from "./components/FishData.jsx"
import Login from "./components/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import Register from "./components/Register.jsx"

/*** Styling Pages***/
import './App.css'

//logged in temp route
const getLoggedIn = () => true;

const routerHome = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const loggedIn = await getLoggedIn();

      if(!loggedIn) {
        return redirect("/login");
      }
      return null;
    }
  },
  {
    path: "/home",
    element: <div><Home /></div>
  }, 
  {
    path: "/login",
    element: <div><Login /></div>
  },
  {
    path: "/forum",
    element: <div><Forum /></div>
  },
  {
    path: "/register",
    element: <div><Register /></div>
  },
  {
    path: "/fishdata",
    element: <div><FishData /></div>
  }
])

const App = (props) => {
    try{
      console.log("hello")

    } catch (error) {
      console.log('ERROR: handleButton', 'err: ', error);
    }
  
  return (
    <div>
      <React.StrictMode>
        <RouterProvider router = {routerHome} />
      </React.StrictMode>
    </div>

);
};


export default App;

// <Router>
//   <Route path="/forum" element= {<Forum />}/>
// </Router>
/* // <BrowserRouter>
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
// </BrowserRouter>       */