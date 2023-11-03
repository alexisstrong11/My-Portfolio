// Project.js

import React from 'react';

const Project = ({ title, description, imageUrl, link }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;
