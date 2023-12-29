


// use of timeout in arrray
import React from 'react';

const Timeout = () => {
  Array(3).fill().map((_, index) => {
    setTimeout(() => {
      console.log(index);
    }, 1000 * (index + 1));
    return null; // React expects a return value for each iteration, even if it's null
  });

  return (
    <div>
     
    </div>
  );
}

export default Timeout;
