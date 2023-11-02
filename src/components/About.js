import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import picture from "../images/Portfolio/Selfie.png";
import "../style/About.css";

function About() {
  return (
    // The About section on the landing page
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={picture} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                About Alexis Strong
                </Card.Title>
                <Card.Text>
                Alexis Strong is a Motivated and highly inquisitive business professional with research, data and event coordination experience and expertise in mortgage loan processes. 
                Astute problem-solver, meticulous with details, statistical analysis, and managing correlation. 
                Dedicated to expanding subject knowledge and business competencies through continued research and training.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;