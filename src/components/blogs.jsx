import React, { Component } from "react";
import "../contents.css";

class Blogs extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-contents">
          <p className="blogs">Couple Interesting Blog Posts: </p>
          <a href="https://docs.google.com/document/d/15LE2um2oB59h1iELpksz8AM8o9SIy9mL1OFL-PmGeJQ/edit?usp=sharing">
            <p>Convolutional Neural Networks From the Ground Up</p>
          </a>
          <a href="https://towardsdatascience.com/using-hourglass-networks-to-understand-human-poses-1e40e349fa15">
            <p>Using Hourglass Networks To Understand Human Poses</p>
          </a>
          <button className="btn-more">See More</button>
        </div>
      </div>
    );
  }
}

export default Blogs;
