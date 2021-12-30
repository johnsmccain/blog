import React from "react";
import Button from "../button/Button";
import "./form.css";
import Input from "./input/Input";
const Form = ({ data, type, formType }) => {
  return (
    <form className="form">
      <h1 className="login-title">{formType}</h1>

      {data.map((inp, id) => (
        <Input
          className="input"
          key={id}
          text={inp.text}
          placeholder={inp.placeholder}
          forHtml={inp.forHtml}
          forLabel={inp.label}
        />
      ))}
      <Button type="submit" color="primary" text={type} />
    </form>
  );
};

export default Form;
