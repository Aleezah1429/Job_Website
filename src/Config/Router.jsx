import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import JobCard from "../Components/JobCard";
import NavBar from "../Components/NavBar";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Job from "../Pages/SingleJob";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import JobSearch from "../Pages/JobSearch";
import Categories from "../Pages/Categories";
import JobPost from "../Pages/JobPost";
import JobList from "../Pages/JobList";







class AppRouter extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/Job" component={Job} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/JobSearch" component={JobSearch} />
          <Route exact path="/Categories" component={Categories} />
          <Route exact path="/JobPost" component={JobPost} />
          <Route exact path="/AllJobs" component={JobList} />





          {/* <Route  path="/JobCard" component={JobCard} /> */}
<Footer/>
      </Router>
    );
  }
}

export default AppRouter;
