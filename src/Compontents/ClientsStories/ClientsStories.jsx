import React from "react";
import { Carousel } from "react-bootstrap";
import "./ClientsStories.css";
import CarouselPhoto from "../../assets/Carouselphoto.avif";

export default function ClientsStories() {
  return (
    <>
    <div className="sale-buy-section text-center pt-1">
        <h5 className="buy-sale text-uppercase mb-3">CLIENTS STORIES</h5>
      </div>
    <section className="clients-section">
      <img src={CarouselPhoto} alt="Clients" className="background-image" />

      <div className="slider-box">
        <Carousel indicators={false} controls={true} interval={4000}>
          <Carousel.Item>
            <div className="text-center text-white">
              <p>
                "I'm a paragraph. Click here to add your own text and edit me."
              </p>
              <h6 className="text-danger mt-2">Lena Brock, SF</h6>
              <div className="custom-indicators">
                <span></span>
                <span></span>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="text-center text-white">
              <p>"Another testimonial goes here with client feedback."</p>
              <h6 className="text-danger mt-2">John Doe, NY</h6>
              <div className="custom-indicators">
                <span></span>
                <span></span>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
    </>
  );
}
