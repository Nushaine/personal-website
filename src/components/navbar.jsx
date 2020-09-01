import React, { Component } from "react";
import "../navbar.css";
import Blogs from "./blogs";
import Nush from "../nush-face.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavBar extends Component {
  render = () => {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-light nav-style">
            <img class="nush-face" src={Nush}></img>
            <Link to="/blogs">Blogs</Link>
            <a className="nav-link nav-projects">Projects</a>
            <a className="nav-link nav-about">About</a>
          </nav>
        </div>
      </Router>
    );
  };
}

export default NavBar;
