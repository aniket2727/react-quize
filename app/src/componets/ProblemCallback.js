
//problem:use call back functions

import React, { useState } from 'react'


const ChildCallback = ({onhandle}) => {  //function get as variable
  return (
    <div>
        <button onClick={onhandle}>
            child componets
        </button>
    </div>
  )
}


const ParentCallback=()=>{
       const[data,Setdata]=useState(0)

       const handledata=()=>{
        Setdata(data+1);
       }
       return(
        <div> <p> value :{data}</p>
             <ChildCallback onhandle={handledata}/>  
        </div>
       )
}

export default ParentCallback;
