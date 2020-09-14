import React from 'react';
import Header from './components/Header.jsx';
import avatar from "./images/avatar.png";

//delete this
import BlogCard from "./components/BlogCard.jsx";

function App() {
  return (
    <div>
      <Header isSignedIn={true} avatarSrc={avatar} />
      <div style={{background: 'pink', height:'100vh'}}>
        <Header isSignedIn={true} avatarSrc={avatar}/>
      </div>
    </div>
  );
}

export default App;
