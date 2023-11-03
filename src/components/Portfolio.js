// Portfolio.js

import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Horiseon',
    description: 'Refactored Horiseons home webpage to better follow accessibility standards and semantic structure.',
    imageUrl: '/src/images/horiseon.png', // Replace with the actual image path
    link: 'https://alexisstrong11.github.io/Horiseon/',
  },
  {
    title: 'InventoryWiz',
    description: 'Inventory helps households determine the food items they have in their pantry thereby assisting them to effectively and efficiently manage their supplies and food items.',
    imageUrl: '/src/images/inventoryWiz.jpg', // Replace with the actual image path
    link: 'https://inventorywiz2-4996ab469848.herokuapp.com/',
  },
  {
    title: 'Password Generator',
    description: 'Strengthen security by creating a password that meets an acceptable criteria list.',
    imageUrl: '/src/images/passwordGenerator', // Replace with the actual image path
    link: 'https://alexisstrong11.github.io/password-generator/',
  },
  {
    title: 'Old Portfolio',
    description: 'Setup a portfolio that displays my previoius work.',
    imageUrl: '/src/images/portfolio', // Replace with the actual image path
    link: 'https://alexisstrong11.github.io/Strong-Portfolio/',
  },
  {
    title: 'Work Scehduler',
    description: 'Create a workday calendar that allows users to block off, track and save daily events.',
    imageUrl: '/src/images/scheduler', // Replace with the actual image path
    link: 'https://alexisstrong11.github.io/Work-Scheduler/',
  },
  {
    title: 'Scream Austin',
    description: 'Website that showcases local Austin, Texas artists and venues.',
    imageUrl: '/src/images/screamAustin', // Replace with the actual image path
    link: 'https://alexisstrong11.github.io/Scream-Austin/',
  },
  // Add more project objects as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
