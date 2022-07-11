import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JAMICREATION{" "}
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
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/ja10th">
          <BsFacebook />
        </a>
        <a href="https://www.twitter.com/ja10th">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/ja10th">
          <BsInstagram />
        </a>
        <a href="https://www.whatsapp.com/ja10th">
          <BsWhatsapp />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; JAMICREATION. All rights reserved</small>
      </div>
    </footer>
  );
};

export default footer;
