import React from "react";
import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.css";
function Single() {
  return (
    <div className="single">
      <SinglePost />
      <div className="single-side">
        <Sidebar />
      </div>
    </div>
  );
}

export default Single;
