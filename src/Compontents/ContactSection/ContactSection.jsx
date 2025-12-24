import React from "react";
import "./ContactSection.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export default function ContactSection() {
  return (
    <>
      <section className="contact-section text-center py-5">
        <Container>
          <h5 className="contact-title fw-light mb-5">
            YOUR DREAM HOUSE IS ONE STEP AWAY!
          </h5>
          <Row>
            <Col md={4} sm={12} className="mb-4">
              <FaPhoneAlt className="contact-icon" />
              <h6 className="fw-bold mt-3">Call Us</h6>
              <p className="mb-0">Free Calls</p>
              <p>1-800-000-000</p>
            </Col>

            <Col md={4} sm={12} className="mb-4">
              <FaMapMarkerAlt className="contact-icon" />
              <h6 className="fw-bold mt-3">Find Us</h6>
              <p className="mb-0">500 Terry Francine St.</p>
              <p>San Francisco, CA 94158</p>
            </Col>

            <Col md={4} sm={12} className="mb-4">
              <FaEnvelope className="contact-icon" />
              <h6 className="fw-bold mt-3">Email Us</h6>
              <p className="mb-0">Direct Email</p>
              <p> luxury990@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
