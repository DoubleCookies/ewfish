import ewfishLogo from '../../images/ScrollableHeader/ewfishTextLogo.webp';
import ewLong from '../../images/ScrollableHeader/slide.webp';
import './ScrollableHeader.css';
import React from 'react';

function ScrollableHeader() {
  return (
    <div className="scrollable-header">
      <div className="ewfish-logo">
        <img src={ewfishLogo} alt="EWfish Logo" className="ewfish-logo-img" />
      </div>
      <div className="animation">
        <div className="animation-elements">
          <img src={ewLong} alt="EWfish icons" />
          <img src={ewLong} alt="EWfish icons" />
          <img src={ewLong} alt="EWfish icons" />
        </div>
      </div>
    </div>
  );
}

export default ScrollableHeader;
