import React from "react";
import "./about.css";
import Me from "../../assets/83890830-removebg-preview.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={
                "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="image"
              className="image"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Experience</small>
            </article>
            <article className="about__card">
              <FaUserFriends className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Clients worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Project</h5>
              <small>30+ completed</small>
            </article>
          </div>
          <p>
            My name is James Oluwaleye and I'm a front end developer. I've 2+
            years experience in HTML, CSS and JavaScript. I make use of
            frameworks like Bootstrap and React.js to spice up my work
          </p>

          <a href="#contact" class="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
