import React from "react";
import Project from "./Project";
import horiseon from "../images/horiseon.png";
import inventoryWiz from "../images/inventoryWiz.png";
import passwordGenerator from "../images/passwordGenerator.png";
import portfolio from "../images/portfolio.png";
import scheduler from "../images/scheduler.png";
import screamAustin from "../images/screamAustin.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio components
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Horiseon",
              description: "Refactored Horiseon's home webpage to better follow accessibility standards and semantic structure.",
              imgSrc: horiseon,
              deployedLink:
                "https://alexisstrong11.github.io/Horiseon/",
              githubLink:
                "https://github.com/alexisstrong11/Horiseon",
            },
            {
              title: "InventoryWiz",
              description: "Inventory helps households determine the food items they have in their pantry thereby assisting them to effectively and efficiently manage their supplies and food items.",
              imgSrc: inventoryWiz,
              deployedLink:
                "https://inventorywiz2-4996ab469848.herokuapp.com/",
              githubLink:
                "https://github.com/alexisstrong11/InventoryWiz",
            },
            {
              title: "Password Generator",
              description: "Strengthen security by creating a password that meets an acceptable criteria list",
              imgSrc: passwordGenerator,
              deployedLink:
                "https://alexisstrong11.github.io/password-generator/",
              githubLink:
                "https://github.com/alexisstrong11/password-generator",
            },
            {
              title: "Portfolio",
              description: "Setup a portfolio that displays my previoius work",
              imgSrc: portfolio,
              deployedLink:
                "https://alexisstrong11.github.io/Strong-Portfolio/",
              githubLink:
                "https://github.com/alexisstrong11/Strong-Portfolio",
            },
            {
              title: "Work Scehduler",
              description: "Create a workday calendar that allows users to block off, track and save daily events.",
              imgSrc: scheduler,
              deployedLink:
                "https://alexisstrong11.github.io/Work-Scheduler/",
              githubLink:
                "https://github.com/alexisstrong11/Work-Scheduler",
            },
            {
              title: "Scream Austin",
              description: "Website that showcases local Austin, Texas artists and venues.",
              imgSrc: screamAustin,
              deployedLink:
                "https://alexisstrong11.github.io/Scream-Austin/",
              githubLink:
                "https://github.com/alexisstrong11/Scream-Austin",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;