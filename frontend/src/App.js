import React from 'react';
import Header from './components/Header.jsx';
import avatar_image from "./images/avatar.png";
import Home from './pages/home.jsx';

function App() {
  return (
    <div >
      <Header isSignedIn={false} avatarSrc={avatar_image}/>
      <Home/>
    </div>
  );
}

export default App;
