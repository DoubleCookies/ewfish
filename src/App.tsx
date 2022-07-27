import React from 'react';
import './App.css';
import GithubIcon from "./GithubIcon";
import ew0 from './images/ewfish/ew1-1.png';
import ew1 from './images/ewfish/ew1-2.png';
import ew2 from './images/ewfish/ew2.jpg';
import ew3 from './images/ewfish/ew3.png';

function App() {
  return (
    <div className="app">
      <main>
        <div className="scrollable-header">
          <div className="animation">
            <div className="animation-elements">
              <img src={ew0} alt="ew0" />
              <img src={ew1} alt="ew1" />
              <img src={ew2} alt="ew2" />
              <img src={ew3} alt="ew3" />
              <img src={ew0} alt="ew0" />
              <img src={ew1} alt="ew1" />
              <img src={ew2} alt="ew2" />
              <img src={ew3} alt="ew3" />
              <img src={ew0} alt="ew0" />
              <img src={ew1} alt="ew1" />
              <img src={ew2} alt="ew2" />
              <img src={ew3} alt="ew3" />
            </div>
          </div>
        </div>
        <div className="main-content">
          Ewfish. Other cool things are coming soon!
        </div>

      </main>
      <footer className="footer-block">
        <div>
          <GithubIcon />
        </div>
        <div>2021-2022 <span role="img" aria-label="cookieEmoji">🍪</span></div>
      </footer>
    </div>
  );
}

export default App;
