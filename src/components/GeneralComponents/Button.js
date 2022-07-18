import React from 'react'
//blueprint function for creating button 
export const Button = (props) => {
  return (
    <div>
        <button className="button-33"
        //  onClick={props.action}
         >{props.title}</button>
    </div>
  )
}
