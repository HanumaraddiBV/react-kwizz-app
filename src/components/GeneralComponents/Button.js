import React from 'react'
//blueprint function for creating button 
export const Button = (props) => {
  return (
    <div>
        <button onClick={props.action}>{props.title}</button>
    </div>
  )
}
