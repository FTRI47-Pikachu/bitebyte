import "./App.css";
import SavedSnacks from "./components/SavedSnacks.tsx";
import SnacksContainer from "./components/SnacksContainer.tsx";
import HomePage from "./pages/HomePage.tsx";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TestFileUpload from './components/testFileUpload'; // Import the TestFileUpload component


function App() {
  return (
    <div>
   <HomePage />
      <SavedSnacks />
      <SnacksContainer />   
    </div>
  );
}

export default App;
