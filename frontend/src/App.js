import React from 'react';
import Header from './components/Header.jsx';
import avatar from "./images/avatar.png";


function App() {
  return (
    <div >
      <Header isSignedIn={true} avatarSrc={avatar}/>

    </div>
  );
}

export default App;
