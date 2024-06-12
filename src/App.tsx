import "./App.css";
import SavedSnacks from "./components/SavedSnacks.tsx";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import SnacksContainer from "./components/SnacksContainer.tsx";
import HomePage from "./pages/HomePage.tsx";
import React from 'react';
import './App.css';
import TestFileUpload from './components/testFileUpload'; // Import the TestFileUpload component

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login'
//import Signup from './component/signup'

const App: React.FC= ()=> {
  
  return (

    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div>
        <Login />
      </div>
    </div>

  )
  
  //   <Router>
  //   <Switch><Route exact path="/login" component={Login} />
  //     <ProtectedRoute exact path="/homepage/:username" component={Homepage} />
  //     <Redirect to="/login" />
  //   </Switch>
  // </Router>);
}

export default App;
