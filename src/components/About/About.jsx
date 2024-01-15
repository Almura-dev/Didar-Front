import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
export const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={"https://i.ibb.co/QFjkdTd/photo-2022-12-24-17-11-43-2.jpg"}
              alt="About image"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>7+ companies</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Designs</h5>
              <small>300+ completed</small>
            </article>
          </div>

          <p>
            I am Didar Baxtyar Ahmad. I am 23 years old. I study Computer
            Science in Charmo Univeristy, stage four. I have the ability to
            work with teams and group projects. I can work under pressure and be
            the leader while working.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
