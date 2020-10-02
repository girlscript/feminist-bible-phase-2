import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home.jsx'
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import avatar_image from "./images/avatar.png";
import Registration from "./pages/Registration";
import Admin from "./pages/admin.jsx";
function App() {
  return (
    <Router>
      <Header isSignedIn={false} avatarSrc={avatar_image} />

      {/* pages will come here */}
      <Switch>
        <Registration path="/register" exact />
        <Home path="/" exact/>
        <Admin path="/admin" exact />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
