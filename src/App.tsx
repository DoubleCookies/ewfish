import React from 'react';
import './App.css';
import GithubIcon from "./GithubIcon";
import ScrollableHeader from "./components/ScrollableHeader/ScrollableHeader";

function App() {
  return (
    <div className="app">
      <main>
        <ScrollableHeader />
        <div className="main-content">
          Ewfish. Other cool things are coming soon!
        </div>

      </main>
      <footer className="footer-block">
        <div>
          <GithubIcon />
        </div>
        <div>2022 <span role="img" aria-label="cookieEmoji">🍪</span></div>
      </footer>
    </div>
  );
}

export default App;
