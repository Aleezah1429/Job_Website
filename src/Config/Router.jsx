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
import Authentication from "../Pages/Authentication";
import {connect} from "react-redux";
import Category from "../Pages/Category";
import JobProfile from "../Pages/JobProfile";







class AppRouter extends Component {
  render() {
    return (
      <Router>
      {console.log("USER INFO", this.props.userInfo)}
        {
          this.props.userInfo.email=="anonymous@gmail.com" ?
          
          <Route exact path="/" component={Authentication} />
        :
        <>
        <NavBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/Job" component={Job} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/JobSearch" component={JobSearch} />
          <Route exact path="/Categories" component={Categories} />
          <Route exact path="/JobPost" component={JobPost} />
          <Route exact path="/AllJobs" component={JobList} />
          <Route exact path="/JobProfile" component={JobProfile} />
          <Route exact path="/Category/:id" component={Category} />
          <Footer/>
          </>
        }
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
      userInfo:state.userInfo
  }
}

export default connect(mapStateToProps,null)(AppRouter);