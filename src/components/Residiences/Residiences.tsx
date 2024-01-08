import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// style css
import "swiper/css";
import "./Residiences.css";
import { data } from "../../utils/data";
import { sliderSettings } from "../../utils/common";

const Residiences = () => {
  console.log(data.map((card) => card.image));
  return (
    <section className="r-wrapper">
      <div className="paddings innerwidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
      </div>
      <Swiper {...sliderSettings}>
        <SliderButton />
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="flexColStart r-card">
              <img src={card.image} alt="image" width={500} />
              <span>
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Residiences;
const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
