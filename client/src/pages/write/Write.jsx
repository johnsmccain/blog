import React, { useContext, useRef, useState } from "react";
import dev from "../../assets/dev.gif";
import { Add } from "@mui/icons-material";
import "./write.css";
import { Context } from "../../context/Context";
import axios from "axios";
function Write() {
  const title = useRef();
  const desc = useRef();
  const [file, setFile] = useState();
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title: title.current.value,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
      console.log(file);
      console.log(data);
    }
    try {
      const res = await axios.post("/post", newPost);
      window.location.replace("/post/", res.data._id);
      console.log("response" + res);
    } catch (error) {}
    console.log(newPost);
  };

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="post" className="w-img" />
      )}
      <form className="w-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="wf-group">
          <label htmlFor="plus" className="plusIcon">
            <Add className="wf-addIcon" />
          </label>
          <input
            type="file"
            accept="image/*"
            title="Only images are allowed"
            id="plus"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            autoFocus={true}
            placeholder="Title"
            className="wf-control"
            ref={title}
          />
        </div>
        <div className="wf-group">
          <textarea
            placeholder="Tell your story..."
            className="wf-control text"
            ref={desc}
          ></textarea>
        </div>
        <button type="submit" className="wf-btn">
          puplish
        </button>
      </form>
    </div>
  );
}

export default Write;
