


// assinemet is about the color changes accordings to the providec colors
import React, { useState } from "react"
import { StyleHTMLAttributes } from "react"

const Colorchange=()=>{
    const[backgroundcolor,setbackgroundcolor]=useState('')
    const getcolor=(event)=>{   // get data passed from buttons 
            setbackgroundcolor(event)   // set color to variables      
    }
    return(
          <div className="colordisplay">
              <div className="colors" style={{ backgroundColor: backgroundcolor ,height:'100px',width:'100px'}}>

              </div>
              <button onClick={()=>getcolor('blue')}>Blue</button>  
              <button onClick={()=>getcolor('red')}>Red</button>
              <button onClick={()=>getcolor('green')}>Green</button>

          </div>

         
    )
}



export default Colorchange