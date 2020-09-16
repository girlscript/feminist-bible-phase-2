import React from 'react';
import Header from './components/Header.jsx';
import avatar_image from "./images/avatar.png";

function App() {
  return (
    <div >
      <Header isSignedIn={true} avatarSrc={avatar_image}/>
    </div>
  );
}

export default App;
