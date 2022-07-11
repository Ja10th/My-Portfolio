import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";
import { MdGroupWork } from "react-icons/md";
import { SiTransportforlondon } from "react-icons/si";
import { AiOutlineContacts } from "react-icons/ai";
import {MdMiscellaneousServices} from 'react-icons/md'
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : " "}>
        <FaHome />
      </a>
      <a href="#about"
      onClick={() => setActiveNav("#about")}
      className={activeNav === "#about" ? "active" : " "}>
        <BiUserPin />
      </a>
      <a href="#experience"
      onClick={() => setActiveNav("#experience")}
      className={activeNav === "#experience" ? "active" : " "}>
        <MdGroupWork />
      </a>
      <a href="#services"
      onClick={() => setActiveNav("#services")}
      className={activeNav === "#services" ? "active" : " "}>
        <MdMiscellaneousServices />
      </a>
      <a href="#portfolio"
      onClick={() => setActiveNav("#portfolio")}
      className={activeNav === "#portfolio" ? "active" : " "}>
        <SiTransportforlondon />
      </a>
      <a href="#contact"
      onClick={() => setActiveNav("#contact")}
      className={activeNav === "#contact" ? "active" : " "}>
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
