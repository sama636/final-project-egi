import React from "react";
import "./Cards.css";
import { FaBed, FaBath, FaLayerGroup, FaRulerCombined } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Cards() {
  const properties = [
    {
      images: [
        "https://static.wixstatic.com/media/84770f_637c55124f32449a8216fd8b6c96d16c~mv2_d_3872_2592_s_4_2.jpeg/v1/fill/w_348,h_208,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpeg",
        "https://static.wixstatic.com/media/84770f_03801b8c2a0c4c799217bfccbdf1fdea~mv2_d_4368_2912_s_4_2.jpeg/v1/fill/w_348,h_208,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpeg",
      ],
      label: "BUY",
      title: "11251 Terry Street",
      address: "San Francisco, CA, USA",
      price: "580,000",
      beds: 4,
      baths: 2,
      levels: 3,
      sqft: 1234,
    },
    {
      images: [
        "https://static.wixstatic.com/media/84770f_461a280a171041da95705f2f064c9afc~mv2_d_6272_4181_s_4_2.jpeg/v1/fill/w_348,h_208,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpeg",
        "https://static.wixstatic.com/media/84770f_ab580106fc944e1cb9b2bdeca3a1296c~mv2_d_2917_1843_s_2.jpeg/v1/fill/w_348,h_208,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpeg",
      ],
      label: "BUY",
      title: "22043 Columbus Avenue",
      address: "San Francisco, CA, USA",
      price: "850,000",
      beds: 4,
      baths: 2,
      levels: 2,
      sqft: 1234,
    },
    {
      images: [
        "https://static.wixstatic.com/media/84770f_461a280a171041da95705f2f064c9afc~mv2_d_6272_4181_s_4_2.jpeg/v1/fill/w_348,h_208,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpeg",
        "https://static.wixstatic.com/media/84770f_ab580106fc944e1cb9b2bdeca3a1296c~mv2_d_2917_1843_s_2.jpeg/v1/fill/w_348,h_208,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpeg",
      ],
      label: "BUY",
      title: "22043 Columbus Avenue",
      address: "San Francisco, CA, USA",
      price: "850,000",
      beds: 4,
      baths: 2,
      levels: 2,
      sqft: 1234,
    },
  ];

  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

  return (
    <>
      <div className="sale-buy-section text-center pt-1">
        <h5 className="buy-sale text-uppercase mb-2">NEW PROPERTIES</h5>
        <h1>For Sale</h1>
      </div>
      <div className="container py-3">
        <div className="row">
          {properties.map((p, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card property-card h-100 shadow-sm">
                <div className="position-relative">
                  <Slider {...sliderSettings}>
                    {p.images.map((img, i) => (
                      <img key={i} src={img} className="card-img-top" alt={p.title} />
                    ))}
                  </Slider>

                  <span className="badge rounded-1 explor position-absolute px-4 top-0 start-0 m-2">
                    {p.label}
                  </span>
                </div>

                <div className="card-body">
                  <h5 className="card-title fw-bold">{p.title}</h5>
                  <p className="text-muted mb-1">{p.address}</p>
                  <p className="price-card fw-bold">
                    {p.price?.toLocaleString()} EGP
                  </p>
                  <hr />

                  <div className="row text-center">
                    <div className="col-3">
                      <FaBed />
                      <p className="mb-0 small">Beds</p>
                      <p className="fw-bold">{p.beds}</p>
                    </div>
                    <div className="col-3">
                      <FaBath />
                      <p className="mb-0 small">Baths</p>
                      <p className="fw-bold">{p.baths}</p>
                    </div>
                    <div className="col-3">
                      <FaLayerGroup />
                      <p className="mb-0 small">Levels</p>
                      <p className="fw-bold">{p.levels}</p>
                    </div>
                    <div className="col-3">
                      <FaRulerCombined />
                      <p className="mb-0 small">Sqft</p>
                      <p className="fw-bold">{p.sqft}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link
            to={"/buy"}
            className="button  d-flex justify-content-center pb-5"
          >
            <button className="btn view rounded-2 bolder px-4 btn-lg">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
