// About.js

import React from 'react';
import picture from "../images/Portfolio/Selfie.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
          <img src={picture} alt="Alexis Selfie" className="image-style"/>
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
                I am a motivated and highly inquisitive business professional with research, data and event coordination experience and expertise in mortgage loan processes. 
                Astute problem-solver, meticulous with details, statistical analysis, and managing correlation. 
                Dedicated to expanding subject knowledge and business competencies through continued research and training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
