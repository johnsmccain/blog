import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from "./pages/settings/Settings";
import About from "./pages/about/About";
import Register from "./pages/register/Register";

function App() {
  const user = false;
  return (
    <div className="container">
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route path="/about">{user ? <About /> : <Register />}</Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/settings">
            {/* {
            user ? */}
            <Settings />
            {/* //  : <Register />
            // } */}
          </Route>
          <Route path="/write">
            {/* {user ?  */}
            <Write />
            {/* // : <Register />} */}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
