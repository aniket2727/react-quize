import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    { "name": "aniket" },
    { "name": "kadam", age: 100 }
  ]);

  const handleIncrement = () => {
    // Update the count three times with +1
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>The value of the count is {count}</h1>
      <button onClick={handleIncrement}>Add</button>
    </div>
  );
};

export default Counter;
