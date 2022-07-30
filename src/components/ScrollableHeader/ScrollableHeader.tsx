import ew0 from "../../images/ScrollableHeader/urmrrr1.png";
import ew1 from "../../images/ScrollableHeader/furyba_original.png";
import ew2 from "../../images/ScrollableHeader/urmrrr2.png";
import ew3 from "../../images/ScrollableHeader/urmrrr3.jpg";
import ewfishLogo from '../../images/ScrollableHeader/ewfish text logo.webp';
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
  );
}

export default ScrollableHeader;