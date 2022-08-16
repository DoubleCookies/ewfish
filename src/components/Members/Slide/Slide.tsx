import './Slide.css';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface IProps {
  name: string;
  title?: string;
  role: string;
  joinDate: string;
  bio: string;
  weapons: string;
  image: string;
}

function Slide(props: IProps) {
  return(
    <div className="slide-block">
      <div className="info-column">
        <div className="name">{props.name}</div>
        { props.title && <div className="title">{props.title}</div>}
        <div className="sub-info"><b>Role: </b> {props.role}</div>
        <div className="sub-info"><b>Join: </b> {props.joinDate}</div>
        <div className="sub-info">
          <ReactMarkdown>{props.bio}</ReactMarkdown>
        </div>
        <div className="sub-info">
          <div><b>Weapons: </b></div>
          {props.weapons}
        </div>
      </div>
      <div className="picture-column">
        <img src={props.image} alt={"team member"}/>
      </div>
    </div>
  );
}

export default Slide;