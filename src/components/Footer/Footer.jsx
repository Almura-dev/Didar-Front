import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
export const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        D I D A R
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://web.facebook.com/adiv.abosnene.7" target={"_blank"}>
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/Didarb.ahmad/" target={"_blank"}>
          <FiInstagram />
        </a>
        <a href="https://twitter.com/DidarBAhmad" target={"_blank"}>
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Developed By{" "}
          <a href="https://web.facebook.com/almura.dev" target={"_blank"}>
            Alan
          </a>
          .
        </small>
      </div>
    </footer>
  );
};
