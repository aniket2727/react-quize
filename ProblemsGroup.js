


//problem grouping of data 
import React, { useState } from 'react'

const ProblemsGroup = () => {
    // store any amount of data into this
    const [data,setdata]=useState(['aniket','kadam','vijay',1,2,null])
    
    const newdata=[...data]
  return (
    <div>
         <p>before the grouping {data}</p>
         <p>{newdata}</p>
    </div>
  )
}

export default ProblemsGroup
