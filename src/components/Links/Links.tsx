import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import bg from '../../images/Backgrounds/bg1.webp';
import './Links.css';
import {faMap} from "@fortawesome/free-solid-svg-icons";

function Links() {
  return (
    <div className="anim-bg-block" style={{ width: '100%', backgroundImage: `url(${bg})` }}>
      <div className="links-block">
        <div className="links-row">
          <a href="https://twitter.com/Ewfish_spl" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size={'4x'} className="twitter-icon" />
          </a>
          <a href="https://twitter.com/Ewfish_spl" target="_blank" rel="noreferrer">
            <b style={{ fontSize: '1.4rem' }}>Twitter</b>
          </a>
          <p>Here we post our tournament results, goofy memes and repost cool stuff made by our team members.</p>
        </div>
        <div className="links-row">
          <a href="/maps" rel="noreferrer">
            <FontAwesomeIcon icon={faMap} size={'4x'} className="maps-icon" />
          </a>
          <a href="/maps" rel="noreferrer">
            <b style={{ fontSize: '1.4rem' }}>Callouts</b>
          </a>
          <p>Our callouts for maps. Work in progress!</p>
        </div>
      </div>
    </div>
  );
}

export default Links;
