import React, { useState } from 'react';
import Button from './button';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleData = (number) => {
    const updatedData = calculate(data, number);
    setData(updatedData);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <p className="result">
          {data.total}
          {' '}
          {data.operation}
          {' '}
          {data.next}
        </p>
        <Button onClick={handleData} />
      </div>
    </div>
  );
}
