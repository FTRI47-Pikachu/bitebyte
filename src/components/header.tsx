import React from 'react';
import Logoimage from '../assets/logo-image.png';

const Header: React.FC = () => {
  return (
    <div className="logo flex items-center">
       
       <img src={Logoimage} alt="Login" style={{ width: '40px', height: 'auto' }}/> 
       <span className="text-5xl font-bold text-gray-800"> {/* Increased font size */}
        BiteByte
      </span>
    </div>
  );
};

export default Header;
