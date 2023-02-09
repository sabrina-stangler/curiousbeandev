import React from 'react';
// import logo from './assets/curiousbean-logo.svg';
import { Logo } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="logo-container">
          <Logo />
        </div>
        <p>
          Curious Bean is a consulting company owned & operated by yours truly, Sabrina Stangler. 
        </p>
        <p>
          I provide services in digital product development, from web & mobile development to product management to UI design, I'm your gal!
        </p>
      </div>
      {/* <div className="content">
        <div className="block">
          Work Experience
        </div>
        <div>//todo</div>
      </div> */}
      <div className="footer">
        <p>
          <a className="email-link" href="mailto:sabstangler@gmail.com">Email me</a> if you'd like to work together.
        </p>
      </div>
    </div>
  );
}

export default App;
