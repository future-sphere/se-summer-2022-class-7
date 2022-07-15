import React from 'react';

interface ButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className='inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      {children}
    </button>
  );
};

export default Button;
