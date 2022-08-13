import React from "react";
import './Footer.css';

function Footer() {
  return(
    <footer className="footer-block">
      <div className="text-a">
        Created by DblCookies with help of Ewfish members!
        <a className="gh-link" href="https://github.com/DoubleCookies/ewfish" target="_blank" rel="noreferrer">Source code</a>
      </div>
      <div className="text-b">
        This website is not affiliated with Nintendo.
        All product names, logos, and brands are property of their respective owners.
      </div>
    </footer>
  )
}

export default Footer;