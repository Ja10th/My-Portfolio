import React from "react";
import CV from '../../assets/Mycv.pdf'

const cta = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download="Mycv.pdf">
        Download CV
      </a>
      <a href="tel:+2347045380644" className="btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default cta;
