
import React, { useState } from 'react'
import Child from './Child'
const Parent = () => {
    const [data, setData] = useState('this is parent data')
    // update data 
    const updateData = (parameter) => {
        setData(parameter)
    }
    return (
        <div>
            <h1>Parent Componets</h1>
            <p>data in parent componets {data}</p>
            
            {/* // there are 1 data and another is functions which is update data ,changes from child is passes to function*/}
            <Child message={data} onUpdateData={updateData} />
        </div>
    )
}

export default Parent
