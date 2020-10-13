import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import avatar_image from "./images/avatar.png";

// pages
import Home from "./pages/home.jsx";
import Registration from "./pages/Registration";
import AboutUs from "./pages/AboutUs.jsx";
import AdminProfile from "./pages/adminProfile.jsx";
import OrganizationList from "./pages/OrganizationList.jsx";
import CodeOfConduct from "./pages/CodeOfConduct.jsx";

function App() {
  return (
    <Router>
      <Header isSignedIn={false} avatarSrc={avatar_image} />

      {/* pages will come here */}
      <Switch>
        <Home path="/" exact />
        <Registration path="/register" exact />
        <AboutUs path="/about" exact />
        <OrganizationList path="/organization" exact />
        <CodeOfConduct path="/code-of-conduct" exact />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
