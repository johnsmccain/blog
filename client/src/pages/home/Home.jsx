import React, { Component } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios.get("/post").then((ps) => {
      const posts = ps.data;
      this.setState({ posts });
      // console.log(ps.data);
    });
  }

  render() {
    return (
      <div className="home">
        <Header />
        <div className="main">
          <Posts posts={this.state.posts} />
          <div className="side">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
