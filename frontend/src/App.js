import React from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import avatar_image from "./images/avatar.png";
import Registration from "./pages/Registration";
import BlogList from "./components/BlogList.jsx";
import CodeOfConduct from "./components/CodeOfConduct.jsx";

function App() {
  return (
    <div>
      <Header isSignedIn={false} avatarSrc={avatar_image}/>
        {/* pages will come here */}
        <BlogList/>
  
      <Footer />
    </div>
  );
}
/*
function App() {
  return (
  //  <CodeOfConduct/>
    
    )
}*/
export default App;
