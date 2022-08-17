import skipper from "../../images/TeamScreenshots/Skipper 1.webp";
import skipper2 from "../../images/TeamScreenshots/Skipper 2.webp";
import kelp2 from "../../images/TeamScreenshots/Kelp 2.webp";
import gang from "../../images/TeamScreenshots/GANG.webp";
import manta1 from "../../images/TeamScreenshots/Manta 1.webp";
import blackbelly from "../../images/TeamScreenshots/Blackbelly.webp";
import bg from "../../images/Backgrounds/bg3.jpg";
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
          <h1 className="section-header">About</h1>
          <i className="section-subHeader">How our team was formed, what did we do in the beginning and other
            interesting stuff!</i>
        </div>
      </div>
      <div className="about-row2">
        <div className="col-text">
          <span className="section-subHeader">2020</span>
          <ReactMarkdown className="about-text">
            Our team was formed in October 2020 by *EW*KD and Li*fish*. Although initially the name was just a
            placeholder it stuck around. Initially we participated exclusively in local russian tourneys
            (we didn't do that good to be honest). All in all
            2020 was a pretty rough year for the team (we didn't play play often, didn't get any solid results, EWKD
            joined
            another team).
          </ReactMarkdown>
          <span className="section-subHeader">2021</span>
          <p className="about-text"> Nonetheless we continued to play and were improving as a team.
            And then came time for <a href="https://challonge.com/ru/TheCupOfTea" target="_blank" rel="noreferrer">The
              Cup Of Tea</a> —
            one of the last major russian tourney.
          </p>
          <ReactMarkdown className="about-text">
            This tourney was held in march of 2021. It was typical Double Elimination but there were three in each
            team
            instead of the usual four (it's a really fun and fresh take on the formula). Right before this event
            Ewfish
            finally became, well, Ewfish (and *the first, the best, and the only* logo was created). And it was great
            — we
            almost got to the losers bracket finale! A few days after The Cup Of Tea, Chronya
            (one of the strongest Splatoon ru-player) suggested to participate in LUTI and even help us as substitute.
            We decided to try it out and that was certainly for the best!
          </ReactMarkdown>
          <p className="about-text">After the seeding tourney we got into division 8 (as expected) and got 4th in group
            though we were very close to
            2nd and 3rd place teams. It was fun, challenging, engaging, and informative but that's besides the point,
            the most
            important part is that after the season ended our momentum didn't halt and we started taking part in more
            tournaments!
          </p>
          <p className="about-text">
            In this year we participated in many tournaments and got some prize places (1st place in LSL 13 Emerald
            Bracket,
            2nd place in LSL 15 Silver Bracket, 3rd place in URC x LoRule — local ru-tournament).
          </p>
          <span className="section-subHeader">2022</span>
          <ReactMarkdown className="about-text">
            More and more tournaments — and more and more good results! Our results are gradually got better. Of
            course they were some ups and downs, but *ups amount* was higher ~(˘▾˘~).
          </ReactMarkdown>
          <ReactMarkdown className="about-text">
            In may 2022 was a very important tournament for us — LSL 20! Altough first day was a bit rough for us,
            in day 2 we got together and **defeat everyone in Silver Bracket**! As result — we got our first money
            prize
            (the very fact of it was pleasant).
          </ReactMarkdown>
          <p className="about-text">
            One of our global goals was to prepare for Splatoon 3. Well, it's almost there and we are ready for it!
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