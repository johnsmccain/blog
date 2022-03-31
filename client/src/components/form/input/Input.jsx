import "./input.css";
// import { useState } from "react";
const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.forHtml}>{props.forLabel}</label>
      <input
        id={props.forHtml}
        type={props.text}
        placeholder={props.placeholder}
        required
        onChange={(event) => props.setData(event.target.value)}
      />
    </div>
  );
};

export default Input;
