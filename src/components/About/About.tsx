import skipper from "../../images/TeamScreenshots/Skipper 1.webp";
import skipper2 from "../../images/TeamScreenshots/Skipper 2.webp";
import kelp2 from "../../images/TeamScreenshots/Kelp 2.webp";
import gang from "../../images/TeamScreenshots/GANG.webp";
import manta1 from "../../images/TeamScreenshots/Manta 1.webp";
import blackbelly from "../../images/TeamScreenshots/Blackbelly.webp";
import bg from "../../images/Backgrounds/bg3.webp";
import './About.css';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function About() {
  return (
    <div className="anim-bg-block" style={{ backgroundImage: `url(${bg})` }}>
      <div className="about-row">
        <div className="main-image">
          <img src={skipper} alt="Ewfish on Skipper Pavilion" className="about-img" style={{ width: 450 }}/>
        </div>
        <div className="header-column">
          <i className="section-subHeader">How our team was created, what we did in the beginning and other trivia!</i>
        </div>
      </div>
      <div className="about-row2">
        <div className="col-text">
          <span className="section-subHeader">2020</span>
          <hr className="section-divider" style={{width: "40%", marginTop: 0}} />
          <ReactMarkdown className="about-text">
            Our team was created in October 2020 by EWKD and Lifish. Although initially the name was just a 
            placeholder it stuck around. At first we participated exclusively in local russian tourneys (and didn’t do that hot). 
            All in all 2020 was a pretty rough year for our team 
            (we didn't play often as well as didn't get any solid results and EWKD ended up joining a different team).
          </ReactMarkdown>
          <span className="section-subHeader">2021</span>
          <hr className="section-divider" style={{width: "40%", marginTop: 0}} />
          <p className="about-text"> 
          Nonetheless we continued to play and were improving as a team. Then came time for <a href="https://challonge.com/ru/TheCupOfTea" target="_blank" rel="noreferrer">The
              Cup Of Tea</a> — one of the last major russian tourneys.
          </p>
          <ReactMarkdown className="about-text">
            This tourney was held in March 2021. It was a typical Double Elimination format but there was a twist — it was 3-on-3 instead of 4-on-4.
            Right before this event Ewfish finally became, well, Ewfish (and the first, the best, and the only logo was created). 
            The tournament went great — we almost got to the losers bracket finale! 
            A few days after The Cup Of Tea, Chronya (one of the strongest russian Splatoon players) suggested that we participate in LUTI 
            and even offered to help us as a sub. 
            We decided to try it out and that decision was certainly for the best!
          </ReactMarkdown>
          <p className="about-text">
            After the seeding tourney we got into division 8 (as expected) and got 4th in group (although we were very close to the 2nd and 3rd place teams). 
            It was a really fun event but that's besides the point, the most important thing is that after the season ended our
            momentum didn't stop and we began taking part in more tournaments!
          </p>
          <p className="about-text">
            In 2021 we participated in many tourneys and got some good placements 
            (1st place in LSL 13 Emerald Bracket, 2nd place in LSL 15 Silver Bracket, 3rd place in URC x LoRule — a local ru-tournament).
          </p>
          <span className="section-subHeader">2022</span>
          <hr className="section-divider" style={{width: "40%", marginTop: 0}} />
          <ReactMarkdown className="about-text">
            As we participated in more and more tournaments we got better and better results! 
            There were some ups and downs, but overall there were way more ups ~(˘▾˘~).
          </ReactMarkdown>
          <ReactMarkdown className="about-text">
            In May 2022 a very important tournament for our team was held — LSL 20! 
            Although day 1 was a bit rough for us, on day 2 we got our act together and **won every set in Silver Bracket**! 
            As a result we got our first money prize.
          </ReactMarkdown>
          <p className="about-text">
            One of our main goals these last two years has been to prepare for Splatoon 3. Well, with certainty we can say that we are more than ready for it!
          </p>
        </div>
        <div className="col-img">
          <div className="i1r">
            <img src={manta1} alt="Ewfish on Manta Maria 1" className="about-img" style={{ width: 600 }}/>
          </div>
          <div className="i2r">
            <img src={kelp2} alt="Ewfish on Kelp Dome 2" className="about-img"/>
          </div>
          <div className="i3r">
            <img src={skipper2} alt="Ewfish on Skipper Pavilion" className="about-img" style={{ width: 550 }}/>
          </div>
          <div className="i4r">
            <img src={gang} alt="Ewfish GANG meme" className="about-img" style={{ width: 400 }}/>
          </div>
          <div className="i5r">
            <img src={blackbelly} alt="Ewfish on Blackbelly Skatepark" className="about-img" style={{ width: 550 }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
