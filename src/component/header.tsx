import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="logo">
        <svg
          className="fill-current text-gray-800 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 2c-1.11 0-2.08.56-2.68 1.42C15.7 3.17 14.38 3 13 3c-3.86 0-7 3.14-7 7 0 1.02.23 1.99.65 2.85C4.66 13.86 3 15.76 3 18c0 2.76 2.24 5 5 5h10c3.31 0 6-2.69 6-6 0-3.25-2.45-5.89-5.54-5.99C18.83 8.54 19 7.8 19 7c0-2.76-2.24-5-5-5zm1 10v2h-2v-2h2zm-4 1c0 1.1-.9 2-2 2h-2v2H9v-2H7v-2h2v-2H7V9h2V7h2v2h2c1.1 0 2 .9 2 2v2z" />
        </svg>
        <span className="text-3xl font-bold text-gray-800"> {/* Increased font size */}
        BiteByte
      </span>
    </div>
  );
};

export default Header;
