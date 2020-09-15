import React from 'react';
import Header from './components/Header.jsx';
import avatar from "./images/avatar.png";
import { WithPasswordStrength, Input } from './components/input.jsx';

function App() {
  return (
    <div>
      <Header isSignedIn={true} avatarSrc={avatar} />
      {/* Delete this just for demonstration purpose */}
      <div style={{ width: '500px', margin: 'auto' }}>
        <Input
          label="Name"
          type="text"
          placeholder="Name"
          error="Error can also be passed down based on the event"
          onChange={(e) => {/*do someething with the event in this fuction */ }}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Email Address"
          error=""

        />
        <WithPasswordStrength
          label="Password"
          type="password"
          placeholder="Enter your password"
          error=""
          onChange={(e) => {/*do someething with the event in this fuction */ }}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Enter your password again"
          error=""
          onChange={(e) => {/*do someething with the event in this fuction */ }}
        />
      </div>
      {/* Delete upto here */}
    </div>
  );
}

export default App;
