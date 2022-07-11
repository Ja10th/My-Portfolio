import React from "react";
import "./portfolio.css";
import Port1 from "../../assets/portfolio1.png";
import Port2 from "../../assets/portfolio2.png";
import Port3 from "../../assets/portfolio3.png";
import Port4 from "../../assets/portfolio4.png";
import Port5 from "../../assets/portfolio5.png";
import Port6 from "../../assets/portfolio6.png";
const portfolio = () => {
  const data = [
    {
      id: 1,
      image: Port1,
      title: "HTML Basics",
      github: "https://www.github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 2,
      image: Port2,
      title: "CSS Basics",
      github: "https://www.github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 3,
      image: Port3,
      title: "JavaScript Basics",
      github: "https://www.github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 4,
      image: Port4,
      title: "React Basics",
      github: "https://www.github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 5,
      image: Port5,
      title: "Python Basics",
      github: "https://www.github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
    {
      id: 6,
      image: Port6,
      title: "Flask Basics",
      github: "https://www.github.com",
      demo: "https://dribbble.com/alien_pixels",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My works</h5>
      <h2>Portfolio</h2>

      <div className="containter portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
