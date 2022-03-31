import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import "./register.css";
function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();

  const handleSubmit = async (e) => {
    setErrors(false);
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register/", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
      console.log(res);
    } catch (error) {
      setErrors(error);
    }
  };

  const data = [
    {
      text: "username",
      placeholder: "johhnsdanlmi",
      forGtml: "username",
      label: "username",
      setData: setUsername,
    },
    {
      text: "email",
      placeholder: "johns@gmail.com",
      forGtml: "Email",
      label: "Email",
      setData: setEmail,
    },
    {
      text: "password",
      placeholder: "abc123!@#",
      forHtml: "Password",
      label: "Password",
      setData: setPassword,
    },
  ];
  // console.log(username);
  return (
    <div className="register">
      <div className="register-wrapper">
        <Form
          data={data}
          type="create account"
          handleSubmit={handleSubmit}
          formType="register"
          error={errors}
        />
      </div>
      <Link className="log-btn" to="/login">
        login
      </Link>
    </div>
  );
}

export default Register;
