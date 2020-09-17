import React from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import avatar_image from "./images/avatar.png";

function App() {
  return (
    <div>
      <Header isSignedIn={true} avatarSrc={avatar_image}/>
        {/* pages will come here */}
      <Footer />
    </div>
  );
}

export default App;

