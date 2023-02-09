import React from 'react';
import { Logo } from './components';
import { Footer } from './components';
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
      <Footer />
    </div>
  );
}

export default App;
