import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";

// Header component
function Header() {
  return (
    // Header component
    <>
      <Container fluid className="bg-lightgreen">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
            <h1 className="text-white" style={{ fontSize: "70px" }}>
              <Link
                to="/alexis-strong-my-portfolio/"
                className="text-black text-decoration-none"
                style={{ margin: "0" }}
              >
                Alexis Strong
              </Link>
            </h1>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </>
  );
}
// Export Header
export default Header;