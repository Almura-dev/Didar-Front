import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Motion Graphic</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Slide Show Videos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Motion Videos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Video Montage.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX-------------------------- */}
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Media Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating Logo</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Facebook Cover Design</p>
            </li>
          </ul>
        </article>
        {/* End of Web development-------------------------- */}
        <article className="service">
          <div className="service__head">
            <h3>Social Media Managment</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Facebook Post Sponser</p>
            </li>
            
            <li>
              <BiCheck className="service__list-icon" />
              <p>Instagram Post Sponser</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Posting Content.</p>
            </li>
            
          </ul>
        </article>
        {/* End of Content-------------------------- */}
      </div>
    </section>
  );
};
