import React from "react";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div>
      {/* make sure to pass `isSignedIn` in order to render user-specific nav items*/}
      <Header isSignedIn={true} />
    </div>
  );
}

export default App;
