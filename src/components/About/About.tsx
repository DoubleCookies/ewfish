import skipper from "../../images/TeamScreenshots/Skipper 1.jpg";
import skipper2 from "../../images/TeamScreenshots/Skipper 2.jpg";
import kelp2 from "../../images/TeamScreenshots/Kelp 2.jpg";
import gang from "../../images/TeamScreenshots/GANG.jpg";
import manta1 from "../../images/TeamScreenshots/Manta 1.jpg";
import pin from "../../images/pin.png";
import './About.css';

function About() {
  return (
    <div>
      <div className="about-row">
        <div className="main-image">
          <img src={skipper} alt="Ewfish on Skipper Pavilion" className="about-img" style={{width: 450}} />
          <img src={pin} alt="Pin" className="pin-img" />
        </div>
        <div className="header-column">
          <h1 className="section-header">About</h1>
          <i className="section-subHeader">How our team was formed, what did we do in the beginning and other interesting stuff!</i>
        </div>
        {/*<img src={blush} alt="blush" className="img2-left" />*/}
      </div>
      <div className="about-row2">
        <div className="col-text">
          <p className="about-text">Our team was formed in October 2020 by EWKD and Lifish (hmmm). Although initially the name was just a
            placeholder (there were attempts to come up with a more creative name) it stuck around (though our russian name
            is now ФУРЫБА).
          </p>
          <p className="about-text">Initially we participated exclusively in local russian tourneys (we didn't do that good to be honest). All in all
            2020 was a pretty rough year for the team (didn't play play often, didn't get any solid results, EWKD joined
            another team). Nonetheless we were improving as a team. And then came time for The Cup Of Tea (currently the last
            major russian tourney; https://challonge.com/ru/TheCupOfTea).</p>
          <p className="about-text">This tourney was held in march of 2021. It was typical Double Elimination but there were three in each team
            instead of the usual four (it's a really fun and fresh take on the formula). Right before this event Ewfish
            finally became, well, Ewfish (and *the first, the best, and the only* logo was created). And it was great - we
            almost got to the losers bracket finale! A few days after The Cup Of Tea, Chronya suggested to participate in LUTI
            (and even agreed to help out if we wouldn't have enough players). We decided to try it out and that was certainly
            for the best!</p>
          <p className="about-text">After the seeding tourney we got into division 8 (as expected) and got 4th in group though we were very close to
            2nd and 3rd place teams. It was fun, challenging, engaging, and informative but that's besides the point, the most
            important part is that after the season ended our momentum didn't halt and we started taking part in more
            tournaments.</p>
        </div>
        <div className="col-img">
          <div className="i1r">
            <img src={manta1} alt="Ewfish on Manta Maria 1" className="about-img" style={{width: 600}} />
          </div>
          <div className="i2r">
            <img src={kelp2} alt="Ewfish on Kelp Dome 2" className="about-img" />
          </div>
          <div className="i3r">
            <img src={skipper2} alt="Ewfish on Skipper Pavilion" className="about-img" style={{width: 550}} />
          </div>
          <div className="i4r">
            <img src={gang} alt="Ewfish GANG meme" className="about-img" style={{width: 400}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;