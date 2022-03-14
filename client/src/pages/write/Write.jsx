import React from "react";
import dev from "../../assets/dev.gif";
import { Add } from "@mui/icons-material";
import "./write.css";
function Write() {
  return (
    <div className="write">
      <img src={dev} alt="" className="w-img" />
      <form className="w-form">
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
          />
          <input
            type="text"
            autoFocus={true}
            placeholder="Title"
            className="wf-control"
          />
        </div>
        <div className="wf-group">
          <textarea
            placeholder="Tell your story..."
            className="wf-control text"
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
