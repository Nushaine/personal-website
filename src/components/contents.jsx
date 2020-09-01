import React, { Component } from "react";
import "../contents.css";

class Contents extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-contents">
          <h1>
            I'm a tech enthusiast interested in computer vision, finance,
            startups, transportation, and personal growth.
          </h1>
          <p className="newsletter">Sign up for my newsletter</p>
          <p className="blogs">Couple Interesting Blog Posts: </p>
          <a href="https://docs.google.com/document/d/15LE2um2oB59h1iELpksz8AM8o9SIy9mL1OFL-PmGeJQ/edit?usp=sharing">
            <p>Convolutional Neural Networks From the Ground Up</p>
          </a>
          <a href="https://towardsdatascience.com/using-hourglass-networks-to-understand-human-poses-1e40e349fa15">
            <p>Using Hourglass Networks To Understand Human Poses</p>
          </a>
          <a href="https://towardsdatascience.com/a-deep-dive-into-lane-detection-with-hough-transform-8f90fdd1322f">
            <p>A Deep Dive into Lane Detection with Hough Transform</p>
          </a>
          <button className="btn-more">See More</button>

          <p className="projects">Some Cool Projects: </p>
          <p>Implementing a CNN from Scratch in Numpy</p>
          <a href="https://github.com/Nushaine/road-sign-classifier">
            <p>Road Sign Classification using CNN's</p>
          </a>
          <p>Human Pose Estimation with Hourglass Nets</p>
          <button className="btn-more last">See More</button>
        </div>
      </div>
    );
  }
}

export default Contents;
