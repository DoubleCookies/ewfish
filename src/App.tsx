import React from 'react';
import './App.css';
import GithubIcon from "./GithubIcon";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
         Ewfish<br/>༼ つ ◕_◕ ༽つ
        </div>
      </header>
      <main className="main-content">
        Ewfish
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
