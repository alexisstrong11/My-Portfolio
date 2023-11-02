import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../style/Footer.css";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/alexisstrong11",
    icon: faGithub,
    color: "#ffd700",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alexis-strong3/",
    icon: faLinkedin,
    color: "#2EACE8",
  },

];

// Footer component
const Footer = () => {
  return (
    <footer className="footer bg-lightgreen text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, url, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={url}
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size" 
                  style={{ color: color }}
                />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
        <h5 className="designer-text">Designed by Alexis Strong</h5>
          <p>
          <h6 className="copyright-text">&copy; {new Date().getFullYear()}</h6>
          </p>
        </section>
      </div>
    </footer>
  );
};
// Export Footer
export default Footer;