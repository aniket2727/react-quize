import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[data1,setdat1]=useState(10)
    const [data2,setdata2]=useState(20)
    const [data3,setdata3]=useState('')
    // useffect runs when page is render every time
    useEffect(()=>{

        return ()=>{
            const result=data1*data2
            setdata3(result)
        };
    },[])

  return (
    <div>
     <h1>{data3}</h1>
    </div>
  )
}

export default Useeffect
