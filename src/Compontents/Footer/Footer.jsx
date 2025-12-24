import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="align-items-start">
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <h5 className="footer-logo pb-3">
              <FaHome className="logo-icon" /> Luxury <span>Real Estate</span>
            </h5>
            <p className="footer-desc mt-2">
              We provide premium real estate
              <br /> services to help you find, buy, or rent your dream property
              with ease.
            </p>
          </Col>

          <Col md={4} sm={6} className="mb-4 mb-md-0">
            <ul className="footer-links list-unstyled">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/buy"}>
                <li>Buy</li>
              </Link>
              <Link to={"/rent"}>
                <li>Rent</li>
              </Link>
              <Link to={"/team"}>
                <li>Team</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
          </Col>

          <Col md={4} sm={6}>
            <p className="mb-1">500 Terry Francine Street</p>
            <p className="mb-1">San Francisco, CA 94158</p>
            <a href="mailto:luxury990@gmail.com" className="footer-email">
              luxury990@gmail.com
            </a>
          </Col>
        </Row>

        <Row className="mt-4 align-items-center">
          <Col md={6} sm={12} className="mb-3 mb-md-0">
            <p className="mb-0">
              © 2035 by Luxury. Powered and secured by Team EGI
            </p>
          </Col>

          <Col md={6} sm={12} className="text-md-end text-center">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon">
              <FaYoutube />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
