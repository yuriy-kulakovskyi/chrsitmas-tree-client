import React, { useState } from 'react';
import './Trees.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiper.css";

// import required modules
import { EffectCards, Navigation } from "swiper";

const Trees = () => {
  const [trees, updateTrees] = useState([]);

  fetch('http://localhost:3600/read')
  .then(res => res.json())
  .then(data => {
    updateTrees(data);
  })

  return (
    <section className="trees section" id='trees'>
      <div className="trees__container container grid">
        <div className="trees__container__data">
          <h2 className="trees__container__data__title">Ялинки різних <br /> категорій</h2>
          <p className="trees__container__data__description">Замовляйте новорічну ялинку у нас, щоб додати свому оточенню новорічного настрою. Приймайте наші вітання з Новим роком та Різдвом Христовим. В якості подарунку будуть знижки на наші товари.</p>
        </div>
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards, Navigation]} className="mySwiper" navigation={true} >
          {trees.map((slideContent, index) => (
            <SwiperSlide key={slideContent._id} virtualIndex={index}>
              <SwiperSlide>
                <img src={slideContent.img} alt="tree" />
                <h3>{slideContent.name}</h3>
                <button className="buy"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M2.66676 4.77605L0.504761 2.61472L1.44809 1.67139L3.60943 3.83339H13.7708C13.8747 3.83338 13.9771 3.85766 14.07 3.9043C14.1629 3.95093 14.2435 4.01863 14.3056 4.10198C14.3676 4.18534 14.4093 4.28204 14.4274 4.38438C14.4454 4.48671 14.4392 4.59185 14.4094 4.69139L12.8094 10.0247C12.7683 10.1621 12.6839 10.2826 12.5688 10.3682C12.4538 10.4538 12.3142 10.5001 12.1708 10.5001H4.00009V11.8334H11.3334V13.1667H3.33343C3.15662 13.1667 2.98705 13.0965 2.86202 12.9715C2.737 12.8464 2.66676 12.6769 2.66676 12.5001V4.77605ZM4.00009 5.16672V9.16672H11.6748L12.8748 5.16672H4.00009ZM3.66676 15.8334C3.40154 15.8334 3.14719 15.728 2.95965 15.5405C2.77212 15.353 2.66676 15.0986 2.66676 14.8334C2.66676 14.5682 2.77212 14.3138 2.95965 14.1263C3.14719 13.9387 3.40154 13.8334 3.66676 13.8334C3.93198 13.8334 4.18633 13.9387 4.37387 14.1263C4.5614 14.3138 4.66676 14.5682 4.66676 14.8334C4.66676 15.0986 4.5614 15.353 4.37387 15.5405C4.18633 15.728 3.93198 15.8334 3.66676 15.8334ZM11.6668 15.8334C11.4015 15.8334 11.1472 15.728 10.9597 15.5405C10.7721 15.353 10.6668 15.0986 10.6668 14.8334C10.6668 14.5682 10.7721 14.3138 10.9597 14.1263C11.1472 13.9387 11.4015 13.8334 11.6668 13.8334C11.932 13.8334 12.1863 13.9387 12.3739 14.1263C12.5614 14.3138 12.6668 14.5682 12.6668 14.8334C12.6668 15.0986 12.5614 15.353 12.3739 15.5405C12.1863 15.728 11.932 15.8334 11.6668 15.8334Z" fill="white"></path></svg> {slideContent.price}</button>
              </SwiperSlide>
            </SwiperSlide>
          ))}
        </Swiper>
        <img src={process.env.PUBLIC_URL + '/img/snow-img.webp'} alt="Snow" className="trees__container__snow-1" />
        <img src={process.env.PUBLIC_URL + '/img/snow-img.webp'} alt="Snow" className="trees__container__snow-2" />
      </div>
    </section>
  );
}

export default Trees;
