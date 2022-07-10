import React from "react";
// blueprint function for all input tag
const Input = (props) => {
  //   console.log('props:', props)
  return (
    <div>
      <label>{props.title}</label>
      <input
        onChange={props.onChange}
        name={props.name}
        value={props.val}
        placeholder={props.placeholder}
        type={props.inputType}
      />
    </div>
  );
};

export default Input;
