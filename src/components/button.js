import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  const buttons = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  const handleClick = (number) => {
    onClick(number);
  };

  return (
    <div className="buttons">
      {buttons.map((number) => (
        <button
          key={number}
          type="button"
          className={`btn ${['/', 'x', '-', '+', '='].includes(number) ? 'operations' : 'number'} ${number === '0' ? 'zero' : ''}`}
          onClick={() => handleClick(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
