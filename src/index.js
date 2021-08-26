import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Register from "views/register/register-page.js";
import Courses from "views/Courses/CoursesPage.js";
import Exams from "views/exams/ExamPage.js";
import RequestCourse from "views/LandingPage/Sections/WorkSection.js";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={Components} />
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/register" component={Register} />
      <Route path="/login" component={LoginPage} />
      <Route path="/courses" component={Courses} />
      <Route path="/exam" component={Exams} />
      <Route path="/request" component={RequestCourse} />
      <Route path="/" component={LandingPage} />
      <Route path="/comp" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
