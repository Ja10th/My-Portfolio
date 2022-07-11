import React from "react";
import CV from '../../assets/James resume.pdf'

const cta = () => {
  return (
    <div className="cta">
      <a href="" className="btn" download={CV}>
        Download CV
      </a>
      <a href="tel:+2347045380644" className="btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default cta;
