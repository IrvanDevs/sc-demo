import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, ChevronLeft, ChevronRight } from "react-feather";
import "./Igservice.css";
import Menu from "../element/Menu.js";
import Account from "../element/Account-item.js";

import IGvd from "../images/ig-rekap/ig-vd.png";
import vdRecap from "../images/ig-rekap/vd-rekap.png";

import IGelevit from "../images/ig-rekap/ig-elevit.png";
import elevitRecap from "../images/ig-rekap/elevit-rekap.png";

import IGeiyo from "../images/ig-rekap/ig-eiyo.png";
import eiyoRecap from "../images/ig-rekap/eiyo-rekap.png";

import IGnw from "../images/ig-rekap/ig-nw.png";
import nwRecap from "../images/ig-rekap/nw-rekap.png";

import IGrosken from "../images/ig-rekap/ig-rosken.png";
import roskenRecap from "../images/ig-rekap/rosken-rekap.png";

gsap.registerPlugin(ScrollTrigger);

const accountsData = [
  {
    profileImg: IGvd,
    contentImg: vdRecap,
    newMenu: "Most Reached:",
    newHighlight: "10M",
    growth: "+29%",
  },
  {
    profileImg: IGelevit,
    contentImg: elevitRecap,
    growth: "+5%",
  },
  {
    profileImg: IGeiyo,
    contentImg: eiyoRecap,
    growth: "+2%",
  },
  {
    profileImg: IGnw,
    contentImg: nwRecap,
    growth: "+15%",
  },
  {
    profileImg: IGrosken,
    contentImg: roskenRecap,
    growth: "+11%",
  },
];

function Igservice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const IgMenuRef = useRef(null);
  const IgContentRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      IgMenuRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: IgMenuRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      IgContentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: IgContentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const changeSlide = (newIndex, direction) => {
    gsap.to(itemRef.current, {
      opacity: 0,
      x: direction === "left" ? 50 : -50,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo(
          itemRef.current,
          { opacity: 0, x: direction === "left" ? -50 : 50 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
        );
      },
    });
  };

  const handlePrev = () => {
    changeSlide(currentIndex === 0 ? accountsData.length - 1 : currentIndex - 1, "left");
  };

  const handleNext = () => {
    changeSlide(currentIndex === accountsData.length - 1 ? 0 : currentIndex + 1, "right");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="Ig-container">
      <div ref={IgMenuRef}>
        <Menu
          icon={Instagram}
          title={"Instagram Insights"}
          description={"Boost engagement, optimize accounts, and drive organic growth on Instagram with effective strategies."}
        />
      </div>
      <div className="Ig-wrapper" ref={IgContentRef}>
        <div className="Ig-content">
          <button className="Ig-slider left" onClick={handlePrev}>
            <ChevronLeft />
          </button>
          <div ref={itemRef}>
            <Account
              profileImg={accountsData[currentIndex].profileImg}
              contentImg={accountsData[currentIndex].contentImg}
              growth={accountsData[currentIndex].growth}
              newMenu={accountsData[currentIndex].newMenu}
              newHighlight={accountsData[currentIndex].newHighlight}
            />
          </div>
          <button className="Ig-slider right" onClick={handleNext}>
            <ChevronRight />
          </button>
        </div>

        <div className="Dots-container">
          {accountsData.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => changeSlide(index, index > currentIndex ? "right" : "left")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Igservice;
