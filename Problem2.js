



//problem:accesing the elemt from usestate

import { useState } from "react"
import React  from 'react'

const Problem2 = () => {
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
       // simply give the index and accessing it
      const firstdata=data[0]
      
  return (
    <div>
       {
        <div>
             <h1>{firstdata.name}</h1>
             <h1>{firstdata.age}</h1>
        </div>    
       }
    </div>
  )
}

export default Problem2
