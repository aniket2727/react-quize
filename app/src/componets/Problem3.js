
// problem:accessing the data accordin gto the values are provided 

import React, { useState } from 'react';

const Problem3 = () => {
  const [data, setData] = useState([
    {
      'name': 'aniket',
      'age': 100
    },
    {
      'name': 'vijay kadam',
      'age': 100
    }
  ]);

  const selectedData = data.filter((item) => {
    return item.name === 'aniket';  //return is required for the filter  
  });

  const  [second_data]=data.filter(item=>item.name==='aniket')

  return (
    <div>
      <h1>Problem 3</h1>
      {
        selectedData.length > 0 && (
          <div>
            <h1>{selectedData[0].name}</h1>
            <h1>{selectedData[0].age}</h1>
            <h1>{second_data &&  second_data.name}</h1>
            <h1>{second_data && second_data.age}</h1>
          </div>
        )
      }
    </div>
  );
}

export default Problem3;
