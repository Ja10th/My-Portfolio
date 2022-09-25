import React from "react";
import "./portfolio.css";
import Port1 from "../../assets/dashboard.png";
import Port2 from "../../assets/app.png";
import Port3 from "../../assets/ch.png";
import Port4 from "../../assets/cloud.png";
import Port5 from "../../assets/agency.png";
import Port6 from "../../assets/mo.png";
const portfolio = () => {
  const data = [
    {
      id: 1,
      image: Port1,
      title: "E-Commerce Dashboard",
      github: "https://github.com/Ja10th/Ecommerce-Dashboard",
      demo: "https://jhoppy.netlify.app",
    },
    {
      id: 2,
      image: Port2,
      title: "Mac Appstore redesign",
      github: "https://github.com/Ja10th/Mac-Appstore-Redesign",
      demo: "https://github.com/Ja10th/Mac-Appstore-Redesign",
    },
    {
      id: 3,
      image: Port3,
      title: "Church Website",
      github: "https://github.com/Ja10th/fchbmchurch",
      demo: "https://www.fchbm.com",
    },
    {
      id: 4,
      image: Port4,
      title: "Cloud Management website",
      github: "https://github.com/Ja10th/Cloud-Management-website",
      demo: "https://github.com/Ja10th/Cloud-Management-website",
    },
    {
      id: 5,
      image: Port5,
      title: "Travel Agency",
      github: "https://github.com/Ja10th/Travel-Agency",
      demo: "https://travelagencyja.netlify.app",
    },
    {
      id: 6,
      image: Port6,
      title: "Movie App",
      github: "https://github.com/Ja10th/Movie-App",
      demo: "https://github.com/Ja10th/Movie-App",
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
