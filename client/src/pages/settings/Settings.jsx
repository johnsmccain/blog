import React, { useContext, useRef, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
import { PersonOutlineRounded } from "@mui/icons-material";
import { Context } from "../../context/Context";
import axios from "axios";
function Settings() {
  const [file, setFile] = useState(null);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="s-wrapper">
        <div className="st-title">
          <h1>Update your account</h1>
          <span>delete account</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="s-profile">
            <label className="s-profile-title">profile picture</label>
            <div className="s-img-box">
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt="person"
                className="s-pp-pic"
              />
              <label htmlFor="person">
                <PersonOutlineRounded
                  style={{ color: "white", fontSize: "18px" }}
                />
              </label>
              <input
                type="file"
                name=""
                accept="image/*"
                title="only images allowed"
                id="person"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <label className="s-profile-title">username</label>
            <input
              className="sp-form-control"
              placeholder="john"
              type="text"
              ref={username}
            />
            <label className="s-profile-title">Email</label>
            <input
              className="sp-form-control"
              placeholder="johns@gmail.com"
              type="email"
              ref={email}
            />
            <label className="s-profile-title">Password</label>
            <input
              className="sp-form-control"
              placeholder="12345"
              type="password"
              ref={password}
            />
          </div>
          <div className="btn-box">
            <button className="sf-btn" type="submit">
              Update
            </button>
            {success && (
              <span
                style={{
                  color: "green",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Profile has been updated
              </span>
            )}
          </div>
        </form>
      </div>
      <div className="s-side">
        <Sidebar />
      </div>
    </div>
  );
}

export default Settings;
