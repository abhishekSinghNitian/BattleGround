import React from 'react';

const Button = ({ label, onClick, icon }) => {
  return (
    <button
    className='button'
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
