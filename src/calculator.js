import React, { useState } from 'react';
import Button from './button.js';
import './calculator.css';

const Calculator = () => {
  const [currentDisplay, setCurrentDisplay] = useState('');

  const clickHandle = (value) => {
    if (value === '=') {
      try {
        setCurrentDisplay(eval(currentDisplay).toString());
      } catch (error) {
        setCurrentDisplay('Error');
      }
    } else if (value === 'C') {
      setCurrentDisplay('');
    } else {
      setCurrentDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <body>
      <div className="outer">
        <div className="calc">
          <input type="text" id="display" value={currentDisplay} readOnly />
          <div className="row">
            <Button onClick={() => clickHandle('7')}>7</Button>
            <Button onClick={() => clickHandle('8')}>8</Button>
            <Button onClick={() => clickHandle('9')}>9</Button>
            <Button onClick={() => clickHandle('+')} className="operation">+</Button>
          </div>
          <div className="row">
            <Button onClick={() => clickHandle('4')}>4</Button>
            <Button onClick={() => clickHandle('5')}>5</Button>
            <Button onClick={() => clickHandle('6')}>6</Button>
            <Button onClick={() => clickHandle('-')} className="operation">-</Button>
          </div>
          <div className="row">
            <Button onClick={() => clickHandle('1')}>1</Button>
            <Button onClick={() => clickHandle('2')}>2</Button>
            <Button onClick={() => clickHandle('3')}>3</Button>
            <Button onClick={() => clickHandle('*')} className="operation">*</Button>
          </div>
          <div className="row">
            <Button onClick={() => clickHandle('C')} className="clear">C</Button>
            <Button onClick={() => clickHandle('0')}>0</Button>
            <Button onClick={() => clickHandle('=')} className="operation">=</Button>
            <Button onClick={() => clickHandle('/')} className="operation">/</Button>
          </div>
        </div>
      </div>
      <script src="script.js"></script>
    </body>
  );
};

export default Calculator;
