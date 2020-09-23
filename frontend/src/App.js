import React from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import avatar_image from "./images/avatar.png";
import Registration from './pages/Registration.js';

function App() {
  return (
    <div >
      <Header isSignedIn={false} avatarSrc={avatar_image}/>
        {/* pages will come here */}
        <Registration />
      <Footer />
    </div>
  );
}

export default App;

