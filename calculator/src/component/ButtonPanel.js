import React from 'react';

function ButtonPanel({ handleClick }) {
  const buttons = [
    { name: 'AC', className: 'arithmatic' },
    { name: '+/-', className: 'arithmatic' },
    { name: '%', className: 'arithmatic' },
    { name: '÷', className: 'operation' },
    { name: '7', className: '' },
    { name: '8', className: '' },
    { name: '9', className: '' },
    { name: '×', className: 'operation' },
    { name: '4', className: '' },
    { name: '5', className: '' },
    { name: '6', className: '' },
    { name: '-', className: 'operation' },
    { name: '1', className: '' },
    { name: '2', className: '' },
    { name: '3', className: '' },
    { name: '+', className: 'operation' },
    { name: '0', className: 'zero' },
    { name: '.', className: '' },
    { name: '=', className: 'operation' }
  ];

  return (
    <div className="button-panel">
      {buttons.map(button => (
        <button
          key={button.name}
          className={button.className}
          onClick={() => handleClick(button.name)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonPanel;
