import { useContext, useState } from "react";
import profile from "../../assets/profile.jpg";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { Context } from "../../context/Context";
const Topbar = () => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  // const user = false;
  const { user, dispatch } = useContext(Context);
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

          <li className="topbar-list" onClick={handleClick}>
            <Link to="/write" className="topbar-link">
              Write
            </Link>
          </li>
          {user && (
            <li className="topbar-list">
              <Link
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                  handleClick();
                }}
                to="/"
                className="topbar-link"
              >
                Logout
              </Link>
            </li>
          )}
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
          <Link
            to="settings "
            className={`topbar-avatar link${show && "show topbar-profile"}`}
          >
            <img
              src={user.profilePic ? user.profilePic : profile}
              alt="profile"
              className={`topbar-avatar ${show && "show topbar-profile"}`}
            />
          </Link>
        )}
      </div>

      <div className={`hamburger ${show && "shows "}`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Topbar;
