

// use of reduce function in react



import React, { useState } from 'react'

const Reducer = () => {
    const[data,setdata]=useState([{'name':'cake','price':10,'quantity':3},
    {'name':'icecream','price':5,'quantity':3},
    {'name':'tea','price':3,'quantity':3}])
    const [reducer,setreducer]=useState('')

    const calculate=()=>{
        const reducer=data.reduce((bill,item)=>{
            return bill=bill+item.price*item.quantity
        },0)

        setreducer(reducer)
    }
   
  return (
    <div>
      <h1>{reducer}</h1>
      <button onClick={calculate}>calulate bill</button>
    </div>
  )
}

export default Reducer
