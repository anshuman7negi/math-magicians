import React from 'react';

const Button = () => {
  const buttons = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="buttons">
      {buttons.map((number) => (
        <button
          key={number}
          type="button"
          className={`btn ${['/', 'x', '-', '+', '='].includes(number) ? 'operations' : 'number'} ${number === '0' ? 'zero' : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Button;
