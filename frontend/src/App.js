import React from 'react';
import Header from './components/Header.jsx';
import avatar_image from "./images/avatar.png";
import Registration from './pages/Registration.js';

function App() {
  return (
    <div >
      {/* <Header isSignedIn={true} avatarSrc={avatar_image} /> */}
      <Registration />
    </div>
  );
}

export default App;
