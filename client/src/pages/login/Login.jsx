import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import { Context } from "../../context/Context";
import "./login.css";

function Login() {
  // const [dispatch] = useContext(Context);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { dispatch, isFetching } = useContext(Context);
  const data = [
    {
      text: "text",
      placeholder: "Enter your Username",
      forGtml: "Username",
      label: "Username",
      setData: setUsername,
    },
    {
      text: "password",
      placeholder: "Enter your password!",
      forHtml: "Password",
      label: "Password",
      setData: setPassword,
    },
  ];
  console.log(username);
  console.log(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", { username, password });
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(isFetching);

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
