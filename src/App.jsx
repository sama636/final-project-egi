import { React, useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import Header from "./Compontents/Header/Header";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Team from "./Pages/Team/Team";
import Buy from "./Pages/Buy/Buy";
import Rent from "./Pages/Rent/Rent";
import Footer from "./Compontents/Footer/Footer";
import "./App.css";
import Register from "./Compontents/Register/Register";
import Login from "./Compontents/Login/Login";
import About from "./Pages/About/About";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // clone project
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />

      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default App;
