import React from "react";
import "./header.css";
import CTA from "./cta";
import Headersocials from "./headersocials";
import Me from '../../assets/developer.png';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>James Oluwaleye</h1>
        <h5 class="light">Front End Developer</h5>
        <CTA />

        <div className="me">
          <img src={Me} alt="my picture" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <Headersocials />
      </div>
    </header>
  );
};

export default Header;
