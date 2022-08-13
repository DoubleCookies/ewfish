import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return(
    <footer className="footer-block">
      <div>
        <FontAwesomeIcon icon={faGithub} size={"2x"} />
      </div>
      <div>2022 <span role="img" aria-label="cookieEmoji">🍪</span></div>
    </footer>
  )
}

export default Footer;