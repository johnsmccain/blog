import React from "react";
import "./header.css";
import banner from "../../assets/dev.gif";
function Header() {
  return (
    <div className="header">
      <header className="h-banner">
        <div className="header-titles">
          <h1 className="header-small-text">Developer's</h1>
          <h2 className="header-big-text">ALT Blog</h2>
        </div>
        <img src={banner} alt="banner" />
      </header>
    </div>
  );
}

export default Header;
