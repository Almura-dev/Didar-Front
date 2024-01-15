import React from "react";
import {CiFacebook} from 'react-icons/ci'
import {AiFillBehanceCircle} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import { TiSocialLinkedinCircular } from "react-icons/ti";
export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/adiv.abosnene.7" target="_blank"><CiFacebook/></a>
      <a href="https://www.behance.net/daringyan?tracking_source=search_users|didar%20baxtyar" target="_blank"><AiFillBehanceCircle/></a>
      <a href="tel:+9647702805157" target="_blank"><ImWhatsapp/></a>
      <a href="https://www.linkedin.com/in/didar-baxtyar-88a530219" target=""><TiSocialLinkedinCircular /></a>
    </div>
  );
};
