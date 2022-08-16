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
import bg from "../../images/Backgrounds/bg4.jpg";
import playerBg from "../../images/playerBg2.png";
import playerList from "../../images/playerList.png";
import cookies2 from "../../images/members/dbl.webp";
import tri from "../../images/weapons/tri.webp";
import trin from "../../images/weapons/trin.webp";
import ksloshing from "../../images/weapons/ksloshing.webp";
import slosher from "../../images/weapons/slosher.webp";
import zap85 from "../../images/weapons/zap85.webp";

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
                      onClick={() => sayHello(7)}>MisdGhost</span></li>
            <li><span className={activeSlideNumber === 8 ? 'activeSlide' : 'slide'}
                      onClick={() => sayHello(8)}>Ouzernen</span></li>
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
                role={"Support/Slayer"}
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
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  );
}

export default Members;