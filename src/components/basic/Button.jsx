import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'>
      {children}
    </button>
  );
};

export default Button;
