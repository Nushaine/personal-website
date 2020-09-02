import React, { Component } from "react";
import Link from "next/link";

class NavBar extends Component {
  render = () => {
    return (
      <div>
        <nav className="navbar navbar-light nav-style">
{/*           <img className="nush-face" src={Nush}></img> */}
          <Link href="/">Home</Link>
          <Link href="/topics">Topics</Link>
        </nav>
      </div>
    );
  };
}

export default NavBar;
