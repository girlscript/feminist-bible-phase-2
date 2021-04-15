import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// css
import "./css/main.scss";

// components
import { Footer } from "./components/Footer/index";
import { Header } from "./components/Header/index";

// pages
import { Home } from "./pages/Home/index";
import { Registration } from "./pages/Registration/index";
import { Login } from "./pages/Login/index";
import { AboutUs } from "./pages/AboutUs/index";
import AdminProfile from "./pages/adminProfile.jsx";
import { OrganizationList } from "./pages/OrganizationList/index";
import { Stories } from "./pages/Stories/index";
import { BlogPage } from "./pages/BlogPage/index";
import { ProjectListing } from "./pages/ProjectListing/index";

import { CodeOfConduct } from "./pages/CodeOfConduct/index";

// images
import avatar_image from "./images/placeholder-images/avatar.png";

// redux
import store from "./redux/store";
import { Provider } from "react-redux";
import { isLoggedIn } from "./redux/action/userAction";
function App() {

  // check whether token expire or not
  React.useEffect(() => {
    store.dispatch(isLoggedIn())
  })

  return (
    <Provider store={store}>
      <Router>
        <Header avatarSrc={avatar_image} />
        <Switch>
          <Home path="/" exact />
          <Registration path="/register" exact />
          <Login path="/login" exact />
          <AboutUs path="/about" exact />
          <OrganizationList path="/organization" exact />
          <CodeOfConduct path="/code-of-conduct" exact />
          <AdminProfile path="/admin" exact />
          <Stories path="/stories" exact />
          <BlogPage path="/stories/post" exact />
          <ProjectListing path="/projects" exact />
        </Switch>

        <Footer />
      </Router>
    </Provider>

  );
}

export default App;
