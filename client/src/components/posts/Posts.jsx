import React from "react";
import Post from "../post/Post";
import "./posts.css";
function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post data={p} key={p._id} />
      ))}
    </div>
  );
}

export default Posts;
