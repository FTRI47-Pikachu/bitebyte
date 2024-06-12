import React from 'react';
import Logoimage from '../assets/logo-image.png';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <div className="logo flex items-center">
      <Link to="/">
        <img src={Logoimage} alt="Home" style={{ width: '40px', height: 'auto' }} />
      </Link>
      <span className="text-5xl font-bold text-gray-800">
        BiteByte
      </span>
    </div>
  );
};

export default Header;
