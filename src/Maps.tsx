import ScrollableHeader from "./components/ScrollableHeader/ScrollableHeader";
import SectionsDivider from "./components/SectionsDivider/SectionsDivider";
import Footer from "./components/Footer/Footer";
import React from "react";
import MapsGallery from "./components/Maps/MapsGallery";
import './Main.css'

function Maps() {
  return (
      <div className="app">
        <ScrollableHeader />
        <main>
          <div className="main-content">
            <SectionsDivider title="Maps" />
            <MapsGallery />
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default Maps;