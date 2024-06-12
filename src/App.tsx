import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import HomePage from './pages/HomePage';

const App = () => {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserId={setUserId} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<HomePage userId={userId} />} />
      </Routes>
    </Router>
  );
}

export default App;

