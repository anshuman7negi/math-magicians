import React, { useState } from 'react';
import Button from './button';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [data, setData] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleData = (number) => {
    const updatedData = calculate(data, number);
    setData(updatedData);
  };

  return (
    <div className="calculator-container">
      <h2 className="calculatorTitle">Let&apos;s do some math!</h2>
      <div className="calculator">
        <p className="result">
          {data.total}
          {' '}
          {data.operation}
          {' '}
          {data.next}
        </p>
        <Button handleData={handleData} />
      </div>
    </div>
  );
}
