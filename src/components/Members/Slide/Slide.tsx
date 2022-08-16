import './Slide.css';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

interface IProps {
  name: string;
  pr?: string;
  title?: string;
  role: string;
  joinDate: string;
  bio: string;
  weapons: string[];
  image: string;
  twitterLink?: string;
}

function Slide(props: IProps) {
  return(
    <div className="slide-block">
      <div className="info-column">
        <div className="name">
          <span style={{marginRight: 10}}>{props.name}</span>
          {props.pr &&
            <span className="pr">({props.pr})</span>
          }
          {props.twitterLink &&
            <a style={{marginLeft: 10}} href={props.twitterLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size={"sm"} className="twitter-icon" />
            </a>
          }
        </div>
        { props.title && <div className="title">{props.title}</div>}
        <div className="sub-info"><b>Role: </b> {props.role}</div>
        <div className="sub-info"><b>Join: </b> {props.joinDate}</div>
        <div className="sub-info">
          <ReactMarkdown>{props.bio}</ReactMarkdown>
        </div>
        <div className="sub-info">
          <div><b>Weapons: </b></div>
          {props.weapons.map(x => <img key={x} className="weapon-img" src={x} alt={x}/>)}
        </div>
      </div>
      <div className="picture-column">
        <img src={props.image} alt={"team member"}/>
      </div>
    </div>
  );
}

export default Slide;