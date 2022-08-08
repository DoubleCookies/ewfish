import React from 'react';
import './App.css';
import GithubIcon from "./GithubIcon";
import ScrollableHeader from "./components/ScrollableHeader/ScrollableHeader";
import About from "./components/About/About";
import Results from "./components/Results/Results";
import SectionsDivider from "./components/SectionsDivider/SectionsDivider";

function App() {
  return (
    <div className="app">
      <ScrollableHeader />
      <main>
        <div className="main-content">
          <About />
          <SectionsDivider title="Results" />
          <Results />
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
