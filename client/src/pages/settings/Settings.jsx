import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import pp from "../../assets/profile.jpg";
import "./settings.css";
import { PersonOutlineRounded } from "@mui/icons-material";
function Settings() {
  return (
    <div className="settings">
      <div className="s-wrapper">
        <div className="st-title">
          <h1>Update your account</h1>
          <span>delete account</span>
        </div>
        <form>
          <div className="s-profile">
            <label className="s-profile-title">profile picture</label>
            <div className="s-img-box">
              <img src={pp} alt="person" className="s-pp-pic" />
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
                style={{ display: "none" }}
              />
            </div>
            <label className="s-profile-title">username</label>
            <input className="sp-form-control" placeholder="john" type="text" />
            <label className="s-profile-title">Email</label>
            <input
              className="sp-form-control"
              placeholder="johns@gmail.com"
              type="email"
            />
            <label className="s-profile-title">Password</label>
            <input
              className="sp-form-control"
              placeholder="12345"
              type="password"
            />
          </div>
          <div className="btn-box">
            <button className="sf-btn" type="submit">
              Update
            </button>
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
