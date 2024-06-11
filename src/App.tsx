import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/login'
import Signup from './component/signup'

const App: React.FC= ()=> {
  return (
    //  <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center"> {/* Updated class list here */}
    //     <Router>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element ={<Signup />} /> {/* Define route for SignUp component */}
    //     </Router>
    // </div>
        <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
        <div>
          <Login />
         
        </div>
       
      </div>
  );
}

export default App;
