import React, { useEffect, useState } from "react";
import "./singlePost.css";
import { DeleteForever, Edit } from "@mui/icons-material";
import home from "../../assets/no.jpg";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState();

  useEffect(() => {
    const getPost = async () => {
      await axios.get(`/post/${path}`).then((p) => setPost(p.data));
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      {post ? (
        <div className="sp-wrapper">
          <img src={post.photo ? post.photo : home} alt="post" />
          <h1 className="sp-title">
            {post.title && post.title}
            <div className="sp-icons">
              <Edit className="sp-icon edit" />
              <DeleteForever className="sp-icon" />
            </div>
          </h1>
          <div className="sp-info">
            <span className="sp-author">
              Author: <strong>{post.username}</strong>
            </span>
            <span className="sp-date">
              {new Date(post.updatedAt).toDateString()}
            </span>
          </div>
          <p className="sp-lead">{post.desc}</p>
        </div>
      ) : (
        <div className="loading">Loading</div>
      )}
    </div>
  );
}

export default SinglePost;
