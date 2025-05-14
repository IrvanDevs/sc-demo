import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./History.css";
import NwLogo from "../images/logo/naturesway.png";
import SambuLogo from "../images/logo/sambucol.png";
import RoskLogo from "../images/logo/rosken.png";
import BmLogo from "../images/logo/blackmores.png";
import HiruLogo from "../images/logo/hiruscar.png";
import QvLogo from "../images/logo/qv.png";
import VdLogo from "../images/logo/vitamindiskon.png";

gsap.registerPlugin(ScrollTrigger);

const partnerLogos = [
  { src: NwLogo, alt: "NaturesWay-logo" },
  { src: SambuLogo, alt: "Sambucol-logo" },
  { src: RoskLogo, alt: "Rosken-logo" },
  { src: BmLogo, alt: "Blackmores-logo" },
  { src: HiruLogo, alt: "Hiruscar-logo" },
  { src: QvLogo, alt: "Qv-logo" },
  { src: VdLogo, alt: "VitaminDiskon-logo" }
];

function History() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll(".Info-wrapper");
    const years = containerRef.current.querySelectorAll(".year-box, .Year-2023");
    const title = containerRef.current.querySelector(".History-title");
    const lines = containerRef.current.querySelectorAll(".line");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    years.forEach((year) => {
      gsap.fromTo(
        year,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: year,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      title,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="History-container" ref={containerRef}>
      <p className="History-title">
        SAMUDRA COMMERCE <br /> <span>JOURNEY</span>
      </p>
      <div className="History-content">
        <div className="History-seg1">
          <div className="History-seg1-year">
            <div className="year-box">2014</div>
            <div className="line"></div>
            <div className="year-box">2018</div>
            <div className="line"></div>
            <div className="year-box">2022</div>
          </div>

          <div className="Seg1-info">
            <div className="Info-wrapper">
              <p className="Info-title">
                International Business Partner <br />
                <span>Digital Marketing Strategist (Enabler)</span>
              </p>
              <div className="Partner-logo">
                {partnerLogos.map((logo, index) => (
                  <img key={index} src={logo.src} alt={logo.alt} />
                ))}
              </div>
            </div>

            <div className="Info-wrapper">
              <p className="Info-title">
                Warehouse <span>(PBF - IPAK - CDOB - TDG)</span>
              </p>
            </div>

            <div className="National-B2B Info-wrapper">
              <p className="Info-title">
                National B2B <span>(General trade & Modern trade)</span>
              </p>
            </div>
          </div>

          <div className="History-seg2">
            <div className="Year-2023">2023 - Now</div>

            <div className="Seg2-info">
              <div className="Info-wrapper">
                <p className="Info-title">
                  International Business Partner <br />
                  <span>Digital Marketing Strategist (Enabler)</span>
                </p>
                <div className="Partner-logo">
                  {partnerLogos.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} />
                  ))}
                </div>
              </div>

              <div className="Split-bar">
                <div className="Split Info-wrapper">
                  <p className="Info-title">
                    Warehouse <span>(PBF - IPAK - CDOB - TDG)</span>
                  </p>
                </div>

                <div className="Split Info-wrapper">
                  <p className="Info-title">
                    National B2B <span>(General trade & Modern trade)</span>
                  </p>
                </div>
              </div>

              <div className="Split-bar">
                <div className="Split Info-wrapper">
                  <p className="Info-title">TikTok Shop Partner</p>
                </div>

                <div className="Split Info-wrapper">
                  <p className="Info-title">Multi-Channel Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;