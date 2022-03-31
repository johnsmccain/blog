import React, { useEffect, useState } from "react";
import {
  Facebook,
  Telegram,
  GitHub,
  LinkedIn,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";
import profile from "../../assets/profile.jpg";
import "./sidebar.css";
import axios from "axios";
function Sidebar() {
  const [category, setCategory] = useState();
  useEffect(() => {
    const getCat = async () => {
      await axios.get("/categories").then((data) => setCategory(data.data));
    };
    getCat();
  }, [category]);

  return (
    <div className="sidebar">
      <div className="s-item">
        <h3 className="s-title">About Me</h3>
        {/* <img src="" alt="" /> */}
        <img className="s-avatar" src={profile} alt="" />
        <p className="s-lead">
          Hi there, i'll like to welcome you all to house my name is{" "}
          <strong>John Danlami</strong>
        </p>
      </div>
      <div className="s-item">
        <h3 className="s-title">Categories</h3>
        <ul className="s-lists">
          {category &&
            category.map((cat, index) => (
              <li key={cat._id} className="s-list">
                {cat.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="s-item">
        <h3 className="s-title">Follow me</h3>
        <div className="s-icons">
          <a href="https://facebook.com" className="s-list">
            <Facebook />
          </a>
          <a href="https://github.com" className="s-list">
            <GitHub />
          </a>
          <a href="https://Instagram.com" className="s-list">
            <Instagram />
          </a>
          <a href="https://linkedIn.com" className="s-list">
            <LinkedIn />
          </a>

          <a href="https://telegram.com" className="s-list">
            <Telegram />
          </a>
          <a href="https://telegram.com" className="s-list">
            <WhatsApp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
