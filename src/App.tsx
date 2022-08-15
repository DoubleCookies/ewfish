import React from 'react';
import './App.css';
import ScrollableHeader from "./components/ScrollableHeader/ScrollableHeader";
import About from "./components/About/About";
import Results from "./components/Results/Results";
import SectionsDivider from "./components/SectionsDivider/SectionsDivider";
import Footer from "./components/Footer/Footer";
import Links from "./components/Links/Links";
import Members from "./components/Members/Members";

function App() {
  return (
    <div className="app">
      <ScrollableHeader/>
      <main>
        <div className="main-content">
          <SectionsDivider title="Work in progress! More cool things coming soon!"/>
          <About/>
          <SectionsDivider title="Members"/>
          <Members/>
          <SectionsDivider title="Results"/>
          <Results/>
          <SectionsDivider title="Where you can find us:"/>
          <Links/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
