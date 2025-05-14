import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "./Header.css";
import scLogo from "../images/sc-logo.png";

function Header({ contactRef }) {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation(); // Dapatkan path aktif di HashRouter
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        gsap.set(menuRef.current, { height: "auto", opacity: 1 });
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (isMenuOpen) {
        gsap.to(menuRef.current, { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" });
      } else {
        gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.5, ease: "power3.in" });
      }
    }
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    if (isMobile) setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (contactRef && contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={headerRef} className="Header-container">
      <div className="Header-wrapper">
        <div className="Header-content">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={scLogo} alt="sc-logo" className="Header-logo" />
          </Link>
          <nav ref={menuRef} className={`Nav-menu ${isMobile ? "mobile" : "desktop"}`}>
            <Link to="/journey" className={location.pathname.includes("journey") ? "active" : ""}>
              Our Journey
            </Link>
            <Link to="/gallery" className={location.pathname.includes("gallery") ? "active" : ""}>
              Gallery
            </Link>
            <a onClick={handleContactClick} className="contact-link">
              Contact Us
            </a>
          </nav>
          {isMobile && (
            <div className={`Burger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;