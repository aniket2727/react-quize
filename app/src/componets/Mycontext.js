





import React, { createContext } from 'react';
const Mycontext = createContext();
const Mycontextprovider = ({ children }) => {
  const data = "aniket kadam";
  return <Mycontext.Provider value={data}>{children}</Mycontext.Provider>;
};

export default Mycontextprovider;
export { Mycontext };
