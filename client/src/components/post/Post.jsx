import React from "react";
import "./post.css";
import dev from "../../assets/dev.gif";
import { Link } from "react-router-dom";
export default function Post() {
  return (
    <div className="post">
      <img src={dev} alt="post" />
      <div className="p-info">
        <div className="p-cats">
          <span className="p-cat">music</span>
          <span className="p-cat">science</span>
        </div>
        <h3 className="p-title">
          <Link className="link" to={`/post/${5}`}>
            How to sing like micheal jackson
          </Link>
        </h3>
        <div className="p-date">1 hour ago</div>
      </div>
      <p className="p-lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        consequatur quos qui, soluta a molestiae? Enim tempore ipsam consequatur
        laborum, voluptates beatae, sequi voluptatibus perspiciatis iusto
        deleniti aliquam, minus praesentium!
      </p>
    </div>
  );
}
