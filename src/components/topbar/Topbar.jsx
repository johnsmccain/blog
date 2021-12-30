import { useState } from "react";
import profile from "../../assets/profile.jpg";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
const Topbar = () => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  const user = false;
  return (
    <div className="topbar">
      <div className="topbar-right">
        <h1 className={`topabar-logo ${show && "green"}`}>ALt blog</h1>
      </div>
      <div className={`topbar-center ${show && "show"}`}>
        <div className="cancel" onClick={handleClick}>
          X
        </div>
        <ul className="topbar-menu">
          <li className="topbar-list">
            <Link
              onClick={handleClick}
              to="/"
              className={` topbar-link ${show && "show"}`}
            >
              Home
            </Link>
          </li>
          <li className="topbar-list">
            <Link onClick={handleClick} to="/about" className="topbar-link">
              About
            </Link>
          </li>
          <li className="topbar-list">
            <Link onClick={handleClick} to="/settings" className="topbar-link">
              Settings
            </Link>
          </li>
          <li className="topbar-list" onClick={handleClick}>
            <Link to="/write" className="topbar-link">
              Write
            </Link>
          </li>
          <li className="topbar-list">
            <Link onClick={handleClick} to="/" className="topbar-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="topbar-left">
        {!user && (
          <ul className="topbar-menu added">
            <li className="topbar-list">
              <Link to="/login" className="topbar-link">
                Login
              </Link>
            </li>
            <li className="topbar-list">
              <Link to="/register" className="topbar-link">
                Register
              </Link>
            </li>
          </ul>
        )}
        <Search className="t-search-icon" />

        {user && (
          <img
            src={profile}
            alt="profile"
            className={`topbar-avatar ${show && "show topbar-profile"}`}
          />
        )}
      </div>

      <div
        className={`hamburger ${show && "shows "}`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Topbar;
