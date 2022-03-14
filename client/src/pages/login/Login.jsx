import React from "react";
import { Link } from "react-router-dom";
// import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import "./login.css";
const data = [
  {
    text: "email",
    placeholder: "e.g johns@gmail.com",
    forGtml: "Email",
    label: "Email",
  },
  {
    text: "password",
    placeholder: "e.g abc123!@#",
    forHtml: "Password",
    label: "Password",
  },
];
function Login() {
  return (
    <div className="login">
      <Form data={data} formType="login" type="Login" />

      <Link className="log-btn" to="/register">
        Register
      </Link>
    </div>
  );
}

export default Login;
