import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StudyCase.css';

import studycase1 from "../images/studycases/studycase1.png";
import studycase2 from "../images/studycases/studycase2.png";
import studycase3 from "../images/studycases/studycase3.png";
import studycase4 from "../images/studycases/studycase4.png";
import studycase5 from "../images/studycases/studycase5.png";
import studycase6 from "../images/studycases/studycase6.png";

gsap.registerPlugin(ScrollTrigger);

const StudyCase = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef(null);
  const lowerTitleRef = useRef(null);

  const images = [studycase1, studycase2, studycase3, studycase4, studycase5, studycase6];

  useEffect(() => {
    const container = containerRef.current;
    const panels = panelsRef.current.children;
    const lowerTitle = lowerTitleRef.current;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Kondisi responsif
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 600;
    const isIpad = screenWidth > 600 && screenWidth <= 768;
    const isLaptop = screenWidth > 768 && screenWidth <= 1240;
    const isDesktop = screenWidth > 1240 && screenWidth <= 1440;

    // Set xPercent sesuai kategori
    let xPercentValue;
    if (isMobile) {
      xPercentValue = -100 * (panels.length - 1);
    }  else if (isIpad) {
      xPercentValue = -80 * (panels.length - 1);
    } else if (isLaptop) {
      xPercentValue = -70 * (panels.length - 1);
    } else if (isDesktop) {
      xPercentValue = -50 * (panels.length - 1);
    } else{
      xPercentValue = -30 * (panels.length - 1);
    }

    // ScrollTrigger untuk horizontal scroll
    gsap.to(panels, {
      xPercent: xPercentValue,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 2,
        end: () =>
          "+=" +
          (isMobile
            ? panelsRef.current.scrollWidth
            : panelsRef.current.scrollWidth - container.offsetWidth),
        invalidateOnRefresh: true,
      }
    });

    // ScrollTrigger untuk title
    gsap.fromTo(lowerTitle,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.5, ease: "power1.in",
        scrollTrigger: {
          trigger: lowerTitle,
          start: "top bottom-=50",
          end: "bottom bottom",
          toggleActions: "play none none reset"
        }
      }
    );

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Scroll-container" ref={containerRef}>
      <div className="Scroll-wrapper" ref={panelsRef}>
        {images.map((image, index) => (
          <div className="Scroll-content" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={index % 2 === 0 ? 'even' : 'odd'}
            />
          </div>
        ))}
      </div>
      <div className="Lower-title" ref={lowerTitleRef}>
        <span className="Scroll-text">Scroll Down ↓</span>
        <span className="Lower-1">STUDY CASE</span>
        <span className="Lower-2">STUDY CASE</span>
      </div>
    </div>
  );
};

export default StudyCase;
