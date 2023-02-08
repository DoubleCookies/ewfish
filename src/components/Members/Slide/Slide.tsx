import './Slide.css';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faVk } from "@fortawesome/free-brands-svg-icons";

interface IProps {
  name: string;
  pr?: string;
  title?: string;
  role: string;
  joinDate: string;
  leftDate?: string;
  bio: string;
  weapons?: string[];
  image?: string;
  twitterLink?: string;
  vkLink?: string;
  className?: string
}

function Slide(props: IProps) {
  return (
    <div className="slide-block">
      <div className="info-column">
        <div className="name">
          <span style={{ marginRight: 10 }}>{props.name}</span>
          {props.pr &&
          <span className="pr">({props.pr})</span>
          }
          {props.twitterLink &&
          <a style={{ marginLeft: 10 }} href={props.twitterLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size={"sm"} className="twitter-icon"/>
          </a>
          }
          {props.vkLink &&
          <a style={{ marginLeft: 10 }} href={props.vkLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faVk} size={"sm"} className="vk-icon"/>
          </a>
          }
        </div>
        {props.title && <div className="title">{props.title}</div>}
        <div className="sub-info"><b>Role: </b> {props.role}</div>
        <div className="sub-info"><b>Join: </b> {props.joinDate}</div>
        {props.leftDate &&
            <div className="sub-info"><b>Left: </b> {props.leftDate}</div>
        }
        <div className={props.className ? props.className : "sub-info"}>
          <ReactMarkdown>{props.bio}</ReactMarkdown>
        </div>
        {props.weapons &&
        <div className="sub-info">
            <div><b>Weapons: </b></div>
            {props.weapons.map(x => <img key={x} className="weapon-img" src={x} alt={x}/>)}
        </div>
        }
      </div>
      <div className="picture-column">
        {props.image && <img src={props.image} alt={"team member"}/>}
      </div>
    </div>
  );
}

export default Slide;