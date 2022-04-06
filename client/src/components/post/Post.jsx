import React from "react";
import "./post.css";
import dev from "../../assets/no.jpg";
import { Link } from "react-router-dom";
export default function Post({ data }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      <img src={data.photo ? PF + data.photo : dev} alt={data.title} />
      <div className="p-info">
        <div className="p-cats">
          {data.categories.map((cat) => (
            <span key={cat._id} className="p-cat">
              {cat?.name}
            </span>
          ))}
        </div>
        <h3 className="p-title">
          <Link className="link" to={`/post/${data._id}`}>
            {data.title}
          </Link>
        </h3>
        <div className="p-date">{new Date(data.updatedAt).toDateString()}</div>
      </div>
      <p className="p-lead">{data.desc}</p>
    </div>
  );
}
