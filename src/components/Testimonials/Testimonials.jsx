import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container t__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>

          <h5 className="client__name">Someone</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus deleniti modi magnam ut nisi natus ab. Veniam, fuga quis
            laborum suscipit, labore ab cumque laboriosam, nam repellendus
            tempora iure minima.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>

          <h5 className="client__name">Someone</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus deleniti modi magnam ut nisi natus ab. Veniam, fuga quis
            laborum suscipit, labore ab cumque laboriosam, nam repellendus
            tempora iure minima.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>

          <h5 className="client__name">Someone</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus deleniti modi magnam ut nisi natus ab. Veniam, fuga quis
            laborum suscipit, labore ab cumque laboriosam, nam repellendus
            tempora iure minima.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
