import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => {
          setActiveNav("#experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#Portfolio"
        className={activeNav === "#Portfolio" ? "active" : ""}
        onClick={() => {
          setActiveNav("#Portfolio");
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
