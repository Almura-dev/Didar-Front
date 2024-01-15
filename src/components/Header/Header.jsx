import React from "react";
import { CTA } from "./CTA";
import "./header.css";
import ME from "../../assets/me3.png";
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Didar</h1>
        <h5 className="text-light">Graphic Designer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="ME" className="image"/>
        </div>
        <a href="#contact" className="scroll__dwon">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
