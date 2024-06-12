import "./App.css";
import SavedSnacks from "./components/SavedSnacks.tsx";
import SnacksContainer from "./components/SnacksContainer.tsx";
import HomePage from "./pages/HomePage.tsx";
import React from 'react';
import './App.css';
import TestFileUpload from './components/TestFileUpload'; // Import the TestFileUpload component
import TestFileUploadBackend from './components/TestFileUploadBackend'; // Import the TestFileUpload component

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/login'
//import Signup from './component/signup'

const App: React.FC= ()=> {
  return (

        <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
        <div>
          <Login />
        </div>
       
      </div>
  );
}

export default App;
