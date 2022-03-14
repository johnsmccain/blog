import React, { Component } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Header />
        <div className="main">
          <Posts />
          <div className="side">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
