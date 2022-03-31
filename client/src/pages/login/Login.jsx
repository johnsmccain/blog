import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import { Context } from "../../context/Context";
import "./login.css";

function Login() {
  // const [dispatch] = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { dispatch, isFetching } = useContext(Context);
  const data = [
    {
      text: "email",
      placeholder: "Enter your Email",
      forGtml: "Email",
      label: "Email",
      setData: setEmail,
    },
    {
      text: "password",
      placeholder: "Enter your password!",
      forHtml: "Password",
      label: "Password",
      setData: setPassword,
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", { email, password });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <Form
        data={data}
        formType="login"
        handleSubmit={handleSubmit}
        type="Login"
      />

      <Link className="log-btn" to="/register">
        Register
      </Link>
    </div>
  );
}

export default Login;
