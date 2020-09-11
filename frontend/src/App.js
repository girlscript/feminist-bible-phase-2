import React from "react";
import Header from "./components/Header.jsx";
import avatar from "../images/avatar_placeholder.png";

function App() {
  return (
    <div>
      {/* make sure to pass `isSignedIn` in order to render user-specific nav items*/}
      <Header isSignedIn={true} avatarSrc={avatar} />
    </div>
  );
}

export default App;
