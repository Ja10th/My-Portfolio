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
                "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=2000"
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
              <small>20+ completed</small>
            </article>
          </div>
          <p>
            My name is James Oluwaleye and I'm a front end developer. I've an extensive background in Computer Engineering. Before I was admitted to study Computer Engineering in 2017
            I took tutorials on web development and My first professional experience i.e industrial training was as a front end developer intern where I took several courses and did several project while collaborating with UX designers and back end developers to produce finished product
            The Skills I'm familiar with are HTML, CSS, JavaScript and I use Tailwind CSS and React as frameworks. I work for Catchafire as a voluteer
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
