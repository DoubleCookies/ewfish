import './Members.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Slide from "./Slide/Slide";
// If you see this - forgive me
import bg from "../../images/Backgrounds/bg4.webp";
import playerBg from "../../images/playerBg2.webp";
import playerList from "../../images/playerList.webp";
import lifish from "../../images/Members/lifish.webp";
import pitoy from "../../images/Members/pitoy.webp";
import urmr from "../../images/Members/urmr.webp";
import xleb from "../../images/Members/xleb.webp";
import yaga from "../../images/Members/yaga.webp";
import zukhr from "../../images/Members/zukhr.webp";
import cookies2 from "../../images/Members/dbl.webp";
import tri from "../../images/weapons/tri.webp";
import trin from "../../images/weapons/trin.webp";
import ksloshing from "../../images/weapons/ksloshing.webp";
import slosher from "../../images/weapons/slosher.webp";
import zap85 from "../../images/weapons/zap85.webp";
import foilflingza from "../../images/weapons/foilflingza.webp";
import kensadyn from "../../images/weapons/kensadyn.webp";
import luna from "../../images/weapons/luna.webp";
import splashneo from "../../images/weapons/splashneo.webp";
import splatjr from "../../images/weapons/splatjr.webp";
import kensarapid from "../../images/weapons/kensarapid.webp";
import jet from "../../images/weapons/jet.webp";
import chydra from "../../images/weapons/chydra.webp";
import heavyremix from "../../images/weapons/heavyremix.webp";
import gal96 from "../../images/weapons/gal96.webp";
import tent3 from "../../images/weapons/tent3.webp";
import kshot from "../../images/weapons/kshot.webp";

function Members() {

  const [activeSlideNumber, setActiveSlideNumber] = useState(0);

  const pagination = {
    clickable: true,
  };

  const sayHello = (slide: number) => {
    if (activeSlideNumber === slide)
      return undefined;
    if (swiperInstance !== null) {
      swiperInstance.slideToLoop(slide, 500);
      setActiveSlideNumber(slide);
    }
    return undefined;
  }

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="anim-bg-block" style={{ width: '100%', backgroundImage: `url(${bg})` }}>
      <div className="flex-all">
        <div className="player-list-block" style={{ backgroundImage: `url(${playerList})` }}>
          <ul className="player-list">
            <li><span className={activeSlideNumber === 0 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(0)}>DblCookies</span></li>
            <li><span className={activeSlideNumber === 1 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(1)}>Lifish</span></li>
            <li><span className={activeSlideNumber === 2 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(2)}>Zukhrazavr</span></li>
            <li><span className={activeSlideNumber === 3 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(3)}>Pitoy</span></li>
            <li><span className={activeSlideNumber === 4 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(4)}>Urmrrr</span></li>
            <li><span className={activeSlideNumber === 5 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(5)}>Хлебушек</span></li>
            <li><span className={activeSlideNumber === 6 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(6)}>Yaga</span></li>
            <li><span className={activeSlideNumber === 7 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(7)}>Ouzernen</span></li>
          </ul>
        </div>
        <div className="members-block" style={{ backgroundImage: `url(${playerBg})`, width: 1000, height: 651 }}>
          <Swiper navigation={true}
                  pagination={pagination}
                  modules={[Navigation, Pagination]}
                  speed={500}
                  slidesPerView={1}
                  loop={true}
                  onSlideChange={(swiper) => {
                    setActiveSlideNumber(swiper.realIndex);
                  }}
                  onSwiper={setSwiperInstance}
          >
            <SwiperSlide>
              <Slide
                name={"DblCookies"}
                pr={"He/Him"}
                title={"My name is Cookies. DblCookies."}
                twitterLink={"https://twitter.com/DblCookies"}
                joinDate={"2020"}
                role={"Team Captain + Support/Slayer"}
                bio={"DblCookies joined team at the very beginning, in 2020. After some pause in 2021 he took *team things* " +
                "into his own hands — invited new people, created team server, etc.  \n" +
                "In battle, he tries to keep the situation under control and guide team to victory. " +
                "*But sneaking behind enemy lines is viable option.*  \n" +
                "Also DblCookies has some programming skills — he created this website, helped a bit with Sendou.ink (some bug fixes + features) " +
                "and in general likes coding."}
                weapons={[tri, trin, ksloshing, slosher, zap85]}
                image={cookies2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                name={"Lifish"}
                pr={"He/him"}
                role={"Support/Slayer"}
                joinDate={"2020"}
                bio={""}
                image={lifish}/>
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                name={"Zukhrazavr"}
                title={"The best slayer flingza"}
                pr={"He/Him"}
                role={"Support"}
                joinDate={"2020"}
                bio={""}
                image={zukhr}
                weapons={[foilflingza, kensadyn]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                name={"Pitoy"}
                title={"Пусечка"}
                pr={"He/Him"}
                role={"Slayer/Support"}
                joinDate={"2020"}
                bio={"My name is Pitoy. I'm 17 years old. I get home every day by 3 PM at the latest. " +
                "I don't smoke, but I occasionally drink. I'm in bed by 2 AM, and make sure I get eight hours of sleep, " +
                "no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, " +
                "I usually have no problems sleeping until morning. Just like a baby, " +
                "I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. " +
                "I'm trying to explain that I'm a person who wishes to live a very quiet life. " +
                "I take care not to trouble myself with any enemies, like winning and losing, " +
                "that would cause me to lose sleep at night. That is how I deal with society, " +
                "and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone."}
                image={pitoy}
                className={"pitoy-special"}
                twitterLink={"https://twitter.com/Pitoy12048444"}
                weapons={[luna, splashneo, splatjr, kensarapid]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                name={"Urmrrr"}
                pr={"She/Her"}
                title={"Baton text"}
                twitterLink={"https://twitter.com/urmrrr"}
                role={"Anchor"}
                joinDate={"2021"}
                bio={"Urmrr started playing Splatoon back in the summer of 2020. " +
                "Later that January she was looking for a team to participate in a local tournament and was eventually " +
                "contacted by EWfish. Ever since then she started learning a lot about the game and became a part " +
                "of the Splatoon community. In real life urmrrr is also interested in art.\n"}
                image={urmr}
                weapons={[heavyremix, chydra, jet]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                name={"Хлебушек"}
                pr={"He/Him"}
                role={"Anchor/Slayer"}
                joinDate={"2021"}
                bio={""}
                image={xleb}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                name={"Yaga"}
                title={"Tent is cool"}
                pr={"He/Him"}
                twitterLink={"https://twitter.com/a_bog_hag"}
                role={"Support"}
                joinDate={"2022"}
                bio={"Yaga started playing Splatoon back in March 2021 and fell in love with the game on the spot. " +
                "Later that summer he joined EWfish as an anchor splatling player but later went on to discover the " +
                "wonders of tenta brella. In real life he is an artist with a passion for early 20th century art " +
                "movements and also an amateur game developer. " +
                "(Also he's the creator of Yaga's Weapon Kit Generator go check it out it's really cool)\n"}
                image={yaga}
                weapons={[kshot, tent3, gal96]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                name={"Ouzernen"}
                role={"Anchor/Slayer"}
                joinDate={"2022"}
                bio={""}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  );
}

export default Members;