


// problem statement :code for the accessing the data from usestate

import React, { useState } from 'react';

const Problem1 = () => {
  const [data, setData] = useState([
    {
      'name': 'aniketkada',
      'age': 100
    },
    {
      'name': 'vijay kadam',
      'age': 100
    }
  ]);

  return (
    <div>
      <h1>This is data 1</h1>
      {data.map((item, index) => (
        // if you using two elements inside the jsx then use seperate div for that
        <div key={index}>   
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>
      ))}
    </div>
  );
}

export default Problem1;
