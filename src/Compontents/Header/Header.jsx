import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Luxurylogo from "../../assets/Luxurylogo.png";
import { FiAlignLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Registerp from "../../Pages/Register/Registerp";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar px-4">
        <span className="icon">
          <img className="appLogo" src={Luxurylogo} />
        </span>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoClose /> : <FiAlignLeft />}
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li className={location.pathname === "/buy" ? "active" : ""}>
          <Link to="/buy" onClick={() => setMenuOpen(false)}>
            Buy
          </Link>
        </li>
        <li className={location.pathname === "/rent" ? "active" : ""}>
          <Link to="/rent" onClick={() => setMenuOpen(false)}>
            Rent
          </Link>
        </li>
        <li className={location.pathname === "/team" ? "active" : ""}>
          <Link to="/team" onClick={() => setMenuOpen(false)}>
            Team
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li className={location.pathname === "/register" ? "active" : ""}>
          <Link to="/register" onClick={() => setMenuOpen(false)}>
            <Registerp />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
