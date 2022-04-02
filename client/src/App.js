import React, { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from "./pages/settings/Settings";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
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
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
