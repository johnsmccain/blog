import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import "./register.css";
function Register() {
  const data = [
    {
      text: "email",
      placeholder: "johns@gmail.com",
      forGtml: "Email",
      label: "Email",
    },
    {
      text: "password",
      placeholder: "abc123!@#",
      forHtml: "Password",
      label: "Password",
    },
  ];
  return (
    <div className="register">
      <div className="register-wrapper">
        <Form data={data} type="create account" formType="register" />
      </div>
      <Link className="log-btn" to="/login">
        login
      </Link>
    </div>
  );
}

export default Register;
