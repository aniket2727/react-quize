
// problem :implement the usememo functions

import React from 'react'
import { useMemo,useState } from 'react'

const ProblemUsememo = () =>{
    const [count,Setcount]=useState(0)
    // this is usememo function  called onlu when value of count is changed
    const fun_memo=useMemo(()=>{
        return count*count
    },[count])
  return (
    <div>
        <p>{count}</p>
         <p>{fun_memo}</p>
         <button onClick={()=>Setcount(count+1)}>click me</button>
    </div>
  )
}

export default ProblemUsememo