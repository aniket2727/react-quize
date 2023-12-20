// File: ProbleuseContext.js



// problem :use of usecontext
import React, { useContext } from 'react';
import { Mycontext } from './Mycontext';


const ProbleuseContext = () => {
  const getdata = useContext(Mycontext);  // imported usecontext in which data is stored

  return (
    <div><h1>this is Problem Context</h1>
      <div>{getdata}</div>
    </div>
  );
}

export default ProbleuseContext;
