import ewfishLogo from '../../images/ScrollableHeader/ewfish text logo.webp';
import ewLong from "../../images/ScrollableHeader/ewfishslide2.png";
import './ScrollableHeader.css';
import React from "react";

function ScrollableHeader() {
  return (
    <div className="scrollable-header">
      <div className="ewfish-logo">
        <img src={ewfishLogo} alt="Ewfish Logo" className="ewfish-logo-img" />
      </div>
      <div className="animation">
        <div className="animation-elements">
          <img src={ewLong} alt="Ewfishes" />
          <img src={ewLong} alt="Ewfishes" />
          <img src={ewLong} alt="Ewfishes" />
        </div>
      </div>
    </div>
  );
}

export default ScrollableHeader;