import React from 'react';

const TextArea = (props) => {  
  return (
  <div ><br/>
    <label >{props.title}</label><br /> <br/>
    <textarea
className="Textarea"      name={props.name}
      rows={props.rows}
      cols = {props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} />
    {/* {props.errorMsg  ? <p style={{color: "red"}}>{props.errorMsg}</p>: null} */}
  </div>
)
};

export default TextArea;