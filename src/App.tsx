import React from 'react';
import './App.css';
import ScrollableHeader from "./components/ScrollableHeader/ScrollableHeader";
import About from "./components/About/About";
import Results from "./components/Results/Results";
import SectionsDivider from "./components/SectionsDivider/SectionsDivider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <ScrollableHeader />
      <main>
        <div className="main-content">
          <SectionsDivider title="Work in progress! More cool things coming soon!" />
          <About />
          <SectionsDivider title="Results" />
          <Results />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
