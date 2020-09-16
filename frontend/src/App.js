import React from 'react';
import CodeOfConduct from './components/CodeOfConduct.jsx';
import Header from './components/Header.jsx';
import avatar from "./images/avatar.png";

//delete this
import BlogCard from "./components/BlogCard.jsx";

function App() {
  return (
    <div>
      <Header />
      <CodeOfConduct/>
=======
    <div style={{background: 'pink', height:'100vh'}}>
      <Header isSignedIn={true} avatarSrc={avatar}/>

      {/* delete this */}
      <div className="grid-container" style={{marginTop: '50px', marginBottom: '100px'}}>
        <div className="grid-x grid-margin-x">
          <div className="cell large-4">
            <BlogCard />
          </div>
          <div className="cell large-4">
            <BlogCard />
          </div>
          <div className="cell large-4">
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
