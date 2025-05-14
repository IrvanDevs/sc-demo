import React, { useState, useEffect } from "react";
import { ArrowUp } from 'react-feather';

import './ScrollTopBtn.css';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button className="ScrollToTop-btn" onClick={scrollToTop}>
        <ArrowUp className="Arrow" size={24} />
        <p>scroll to top</p> 
      </button>
    )
  );
};

export default ScrollTop;
