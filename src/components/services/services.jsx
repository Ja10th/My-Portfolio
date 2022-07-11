import React from "react";
import "./services.css";
import { BsCheckSquare } from "react-icons/bs";

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Logo Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Business Logos.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Company Logos.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Personal Logos.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Educational Logos.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Gaming Logos.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Church websites</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Other religious sites</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>School websites.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Tech bros/sis portfolio.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Remote jobs.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>E-commerce stores.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Others</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Web design with wordpress.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Data analysis with python.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Data Visualization </p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>file conversion of any kind.</p>
            </li>
            <li>
              <BsCheckSquare className="service__list-icon" />
              <p>Data entry</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
