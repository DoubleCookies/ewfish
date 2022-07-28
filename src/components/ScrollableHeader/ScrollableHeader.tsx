import ew0 from "../../images/ewfish/ew1-1.png";
import ew1 from "../../images/ewfish/ew1-2.png";
import ew2 from "../../images/ewfish/ew2.jpg";
import ew3 from "../../images/ewfish/ew3.png";
import ewfishLogo from '../../images/ewfish/ew3-text-logo-2-2.png';
import './ScrollableHeader.css';
import React from "react";


function ScrollableHeader() {
  return (
    <div className="scrollable-header">
      <div className="ewfish-logo">
        <img src={ewfishLogo} alt="ewfishLogo" className="ewfish-logo-img" />
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