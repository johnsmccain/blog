import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//     };
//   }
//   componentDidMount() {
//     axios.get("/post").then((ps) => {
//       const posts = ps.data;
//       this.setState({ posts });
//       // console.log(ps.data);
//     });
//   }

//   render() {
//     return (
//       <div className="home">
//         <Header />
//         <div className="main">
//           <Posts posts={this.state.posts} />
//           <div className="side">
//             <Sidebar />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;
// import React{useEffect, useState} from 'react'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(search);
  useEffect(() => {
    const getPost = async () => {
      await axios.get("/post" + search).then((ps) => {
        const Posts = ps.data;
        setPosts(Posts);
        // console.log(ps.data);
      });
    };
    getPost();
  }, [posts]);
  return (
    <div className="home">
      <Header />
      <div className="main">
        <Posts posts={posts} />
        <div className="side">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
