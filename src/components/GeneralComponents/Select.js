import React from "react";

export const Select = (props) => {
  return (
    <div>
      <lable>{props.title}</lable><br/>
      <select  name={props.name} value={props.value} onChange={props.onChange}>
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map((option) => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
