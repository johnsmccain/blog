import React, { useState } from "react";
import Button from "../button/Button";
import "./form.css";
import Input from "./input/Input";
const Form = (props) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        props.handleSubmit(e);
      }}
    >
      <h1 className="login-title">{props.formType}</h1>
      {props.data.map((inp, id) => (
        <Input
          className="input"
          key={id}
          text={inp.text}
          placeholder={inp.placeholder}
          forHtml={inp.forHtml}
          forLabel={inp.label}
          setData={inp.setData}
        />
      ))}
      <Button type="submit" color="primary" text={props.type} />
      {props.error && (
        <span style={{ color: "red", textAlign: "center" }}>
          Something went wrong!
        </span>
      )}
    </form>
  );
};

export default Form;
