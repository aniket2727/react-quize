


import React from 'react'

const Child = (props) => {

    const handleonclick=()=>{
        // this is newly message data which is passed to parent componets
        props.onUpdateData("Updated message from Child!");
    }
  return (
    <div>
      <h1>this is child componets</h1>
      <p>Received message: {props.message}</p>
      <button onClick={handleonclick}>Update message</button>      
    </div>
  )
}

export default Child
