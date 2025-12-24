// import React from "react";
// import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import Slider from "react-slick";
// import "./CardsRent.css";

// export default function CardsRent() {
//   const properties = [
//     {
//       id: 1,
//       description: "Luxury Apartment in Cairo",
//       location: "Cairo",
//       listingType: "RENT",
//       propertyType: "Apartment",
//       rooms: 3,
//       bathrooms: 2,
//       area: 120,
//       Price: 1500000,
//       images: [
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",

//       ]
//     },
//     {
//       id: 1,
//       description: "Luxury Apartment in Cairo",
//       location: "Cairo",
//       listingType: "RENT",
//       propertyType: "Apartment",
//       rooms: 3,
//       bathrooms: 2,
//       area: 120,
//       Price: 1500000,
//       images: [
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",

//       ]
//     },
//     {
//       id: 1,
//       description: "Luxury Apartment in Cairo",
//       location: "Cairo",
//       listingType: "RENT",
//       propertyType: "Apartment",
//       rooms: 3,
//       bathrooms: 2,
//       area: 120,
//       Price: 1500000,
//       images: [
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",
//         "https://static.wixstatic.com/media/84770f_c73843e2be40458a8857a17eb5de3d84~mv2_d_4896_3264_s_4_2.jpg",

//       ]
//     },

//   ];

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500
//   };

//   return (
//     <div className="container my-5">
//       <div className="row">
//         {properties.map((property) => (
//           <div key={property.id} className="col-12 col-md-6 col-lg-4 mb-4">
//             <div className="card h-100 shadow-sm property-card">
//               <div className="position-relative">
//                 <Slider {...sliderSettings}>
//                   {property.images.map((img, i) => (
//                     <img
//                       key={i}
//                       src={img}
//                       alt={`property-${i}`}
//                       className="card-img-top"
//                     />
//                   ))}
//                 </Slider>
//               </div>
//               <div className="card-body">
//                 <h5 className="fw-bold">{property.description}</h5>
//                 <p className="fw-bold">{property.propertyType}</p>
//                 <p className="price-card fw-bold">
//                   {property?.Price?.toLocaleString()} EGP
//                 </p>
//                 <hr />
//                 <div className="row text-center">
//                   <div className="col-3">
//                     <FaBed size={20} />
//                     <p className="mb-0 small">Beds</p>
//                     <p className="fw-bold">{property.rooms}</p>
//                   </div>
//                   <div className="col-3">
//                     <FaBath size={20} />
//                     <p className="mb-0 small">Baths</p>
//                     <p className="fw-bold">{property.bathrooms}</p>
//                   </div>
//                   <div className="col-3">
//                     <IoLocationSharp size={20} />
//                     <p className="mb-0 small">Location</p>
//                     <p className="fw-bold">{property.location}</p>
//                   </div>
//                   <div className="col-3">
//                     <FaRulerCombined size={20} />
//                     <p className="mb-0 small">Sqft</p>
//                     <p className="fw-bold">{property.area}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardsRent.css";
import Rent from "../../API/Rent/RentApi";

export default function CardsRent() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    Rent(setLoading, setError, setProperties);
  }, []);

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

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <div className="container my-5">
      <div className="row">
        {properties.length === 0 ? (
          <p className="text-center">No properties found</p>
        ) : (
          properties.map((property, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm property-card">
                <Slider {...sliderSettings}>
                  {property.image && property.image.length > 0 ? (
                    property.image.map((img, i) => (
                      <img
                        key={i}
                        src={img.url}
                        className="card-img-top"
                        alt=""
                      />
                    ))
                  ) : (
                    <img
                      src="/placeholder.jpg"
                      className="card-img-top"
                      alt="No image available"
                    />
                  )}
                </Slider>

                <div className="card-body">
                  <h5 className="fw-bold">{property.description}</h5>
                  <p className="fw-bold">{property.propertyType}</p>
                  <p className="price-card fw-bold">
                    {property.price?.toLocaleString()} EGP
                  </p>

                  <hr />

                  <div className="row text-center">
                    <div className="col-3">
                      <FaBed />
                      <p className="fw-bold">{property.rooms}</p>
                    </div>
                    <div className="col-3">
                      <FaBath />
                      <p className="fw-bold">{property.bathrooms}</p>
                    </div>
                    <div className="col-3">
                      <IoLocationSharp />
                      <p className="fw-bold">{property.location}</p>
                    </div>
                    <div className="col-3">
                      <FaRulerCombined />
                      <p className="fw-bold">{property.area}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
