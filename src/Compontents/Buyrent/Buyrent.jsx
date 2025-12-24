import React from "react";
import "./Buyrent.css";
import { Link } from "react-router-dom";

export default function BuyRent() {
  return (
  
<div className="row g-0 my-4 d-flex justify-content-center">
  <div className="col-md-5 col-12">
    <Link to={"/buy"} className="option buy d-flex align-items-center justify-content-center">
      <h2 className="fw-bold">Buy</h2>
    </Link>
  </div>

  <div className="col-md-5 col-12">
    <Link to={"/rent"} className="option rent d-flex align-items-center justify-content-center">
      <h2 className="fw-bold">Rent</h2>
    </Link>
  </div>
</div>

        
  );
}
