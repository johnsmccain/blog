import React, { useContext, useEffect, useState } from "react";
import "./singlePost.css";
import { DeleteForever, Edit } from "@mui/icons-material";
import home from "../../assets/no.jpg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "http://localhost:5000/images/";

  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      await axios.get(`/post/${path}`).then((p) => {
        setPost(p.data);
        setTitle(p.data.title);
        setDesc(p.data.desc);
      });
    };
    getPost();
  }, [path, updateMode]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {}
  };
  return (
    <div className="singlePost">
      {post ? (
        <div className="sp-wrapper">
          <img src={post.photo ? PF + post.photo : home} alt="post" />
          <h1 className="sp-title">
            {updateMode ? (
              <input
                type="text"
                className="sp-lead--input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              post.title && post.title
            )}
            {post?.username === user?.username && (
              <div className="sp-icons">
                <Edit
                  className="sp-icon edit"
                  onClick={() => setUpdateMode(true)}
                />
                <DeleteForever className="sp-icon" onClick={handleDelete} />
              </div>
            )}
          </h1>
          <div className="sp-info">
            <span className="sp-author">
              <Link to={`/?user=${post?.username}`} className="link">
                Author: <strong>{post?.username}</strong>
              </Link>
            </span>
            <span className="sp-date">
              {new Date(post.updatedAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <textarea
              className="sp-lead--textArea"
              name="message"
              id=""
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          ) : (
            <p className="sp-lead">{post.desc}</p>
          )}
          {updateMode && (
            <button type="submit" onClick={handleUpdate} className="update-btn">
              update
            </button>
          )}
        </div>
      ) : (
        <div className="loading">Loading</div>
      )}
    </div>
  );
}

export default SinglePost;
