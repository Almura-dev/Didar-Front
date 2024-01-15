import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "./portfolio.css";

export const Portfolio = () => {
  const [imageLinks, setImageLinks] = useState([]);

  useEffect(() => {
    const fetchImageLinks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/fetch-links");
        const links = response.data.links || [];
        setImageLinks(links);
      } catch (error) {
        console.error("Error fetching image links:", error);
      }
    };

    fetchImageLinks();
  }, []);

  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container portfolio__container large-screen"
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {imageLinks.map((link, index) => (
          <SwiperSlide key={index} className="portfolio_item">
            <div className="portfolio__item-image">
              <img src={link.link} alt={`portfolio-item-${index}`} className="p__image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="container portfolio__container small-screen"
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {imageLinks.map((link, index) => (
          <SwiperSlide key={index} className="portfolio_item">
            <div className="portfolio__item-image">
              <img src={link.link} alt={`portfolio-item-${index}`} className="p__image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
