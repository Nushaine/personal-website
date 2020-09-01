import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Contents from "./components/contents";
import Blogs from "./components/blogs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/"
            exact render={() => (
              <div>
                <Navbar />
                <Contents />
              </div>
            )}
          />
          <Route
            path="/blogs"
            exact render={() => (
              <div>
                <Navbar />
                <Blogs />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
