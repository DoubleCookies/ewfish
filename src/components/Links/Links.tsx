import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import bg from "../../images/Backgrounds/bg1.webp";
import './Links.css';

function Links() {
  return(
    <div className="anim-bg-block" style={{ width: '100%', backgroundImage: `url(${bg})` }}>
      <div className="links-block">
        <div className="links-row">
          <a href="https://twitter.com/Ewfish_spl" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size={"4x"} className="twitter-icon" />
          </a>
          <a href="https://twitter.com/Ewfish_spl" target="_blank" rel="noreferrer">
            <b style={{fontSize: "1.4rem"}}>Twitter</b>
          </a>
          <p>
            Here we post our tournament results, goofy memes and repost cool stuff made by our team members.
          </p>
        </div>
        <div className="links-row">
          <a href="https://discord.com/invite/t2nxshYDYg" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDiscord} size={"4x"} className="discord-icon" />
          </a>
          <a href="https://discord.com/invite/t2nxshYDYg" target="_blank" rel="noreferrer">
            <b style={{fontSize: "1.4rem"}}>Discord</b>
          </a>
          <p>
            Here we prepare for events, discuss strategies and just hang out! Feel free to stop by!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Links;
