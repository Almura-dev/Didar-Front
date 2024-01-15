import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skils I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Graphic Design </h3>
          <div className="experience__content">
            {/* ----------------experience__details ---------start*/}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Adobe Photoshop</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* ----------------experience__details ---------end*/}
            {/* ----------------experience__details ---------start*/}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Adobe illustrator</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* ----------------experience__details ---------end*/}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Motion Graphics</h3>
          <div className="experience__content">
            {/* ----------------experience__details ---------start*/}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Adobe After Effects</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* ----------------experience__details ---------end*/}
            {/* ----------------experience__details ---------start*/}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Adobe Premiere Pro</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* ----------------experience__details ---------end*/}
          </div>
        </div>
      </div>
    </section>
  );
};
