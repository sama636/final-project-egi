import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Welcome.css";
import { Link } from "react-router";
export default function Welcome() {
  return (
    <div className="hero-section-welcom d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <div className="content text-white">
        <h1 className="fw-bold display-4">New Properties</h1>
        <p className="mb-4 title_exclusive">EXCLUSIVELY BY DWELL</p>
        <Link to={"/about"}>
          {" "}
          <button className="btn explor px-4 btn-lg">About us</button>
        </Link>
      </div>
    </div>
  );
}
