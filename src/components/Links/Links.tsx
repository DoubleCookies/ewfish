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
          <b style={{fontSize: "1.4rem"}}>Twitter</b>
          <p>
            Here we post our results in tournaments, some memes or just repost cool things from team members.
          </p>
        </div>
        <div className="links-row">
          <a href="https://discord.com/invite/t2nxshYDYg" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDiscord} size={"4x"} className="discord-icon" />
          </a>
          <b style={{fontSize: "1.4rem"}}>Discord</b>
          <p>
            We have Discord server where we plan our participation in events, discuss strategies and having good time!
            Feel free to join us!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Links;