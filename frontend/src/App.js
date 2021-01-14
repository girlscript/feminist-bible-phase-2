import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// css
import "./css/main.scss";

// components
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

// pages
import Home from "./pages/home/home.jsx";
import Registration from "./pages/Registration";
import AboutUs from "./pages/AboutUs.jsx";
import AdminProfile from "./pages/adminProfile.jsx";
import OrganizationList from "./pages/OrganizationList.jsx";
import CodeOfConduct from "./pages/CodeOfConduct.jsx";
import Stories from "./pages/Stories.jsx";
import BlogPage from  "./pages/BlogPage.jsx";
import ProjectListing from "./pages/ProjectListing.jsx"

import Test from "./pages/Test"


// images
import avatar_image from "./images/placeholder-images/avatar.png";

function App() {
  return (
    <Router>
      <Header isSignedIn={false} avatarSrc={avatar_image} />
      <Switch>
        <Home path="/" exact />
        <Registration path="/register" exact />
        <AboutUs path="/about" exact />
        <OrganizationList path="/organization" exact />
        <CodeOfConduct path="/code-of-conduct" exact />
        <AdminProfile path="/admin" exact />
        <Stories path="/stories" exact />
        <BlogPage path="/stories/post" exact/>
        <ProjectListing path="/projects" exact/>
        <Test path="/test" exact/>
      </Switch>
      
      <Footer />
    </Router>
  );
}

export default App;
