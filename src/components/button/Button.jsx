import React from "react";
import "./button.css";
function Button({ type, text, color }) {
  return (
    <button className={`button ${color}`} type={type}>
      {text}
    </button>
  );
}

export default Button;
