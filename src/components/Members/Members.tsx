import './Members.css'
import bg from "../../images/Backgrounds/bg4.jpg";
import playerBg from "../../images/playerBg2.png";
import playerList from "../../images/playerList.png";
import { Swiper , SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType }  from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";
import { useState } from "react";

function Members() {

  const pagination = {
    clickable: true,
  };

  const sayHello = () => {
    console.log("Hello!");
    console.log(swiperInstance);
    if (swiperInstance !== null) {
      swiperInstance.slideTo(3, 500);
    }
  }

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="anim-bg-block" style={{ width: '100%', backgroundImage: `url(${bg})` }}>
      <div className="flex-all">
        <div className="player-list" style={{backgroundImage: `url(${playerList})`}}>
          <ul className="sw-nav">
            <li>DblCookies</li>
            <li>Lifish</li>
            <li><span onClick={sayHello}>Zukhrazavr</span></li>
            <li>Pitoy</li>
            <li>Urmrrr</li>
            <li>Хлебушек</li>
            <li>Yaga</li>
            <li>MisdGhost</li>
            <li>Ouzernen</li>
          </ul>
        </div>
        <div className="members-block" style={{backgroundImage: `url(${playerBg})`, width: 1000, height: 651}}>
          <Swiper navigation={true}
                  pagination={pagination}
                  modules={[Navigation, Pagination]} className="mySwiper"
                  speed={500}
                  slidesPerView={1}
                  loop={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={setSwiperInstance}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  );
}

export default Members;