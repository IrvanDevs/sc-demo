import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Ads.css";
import { BarChart2, Shield, Smile } from "react-feather";  
import Menu from '../element/Menu.js';
import AdsItem from '../element/Ads-item.js';
import vdlogo from '../images/logo/vitamindiskon.png';
import bmlogo from '../images/logo/blackmores.png';
import kintakunlogo from '../images/logo/kintakun.png';
import intheboxlogo from '../images/logo/inthebox.png';
import Adscate from "../element/Ads-cate.js";

gsap.registerPlugin(ScrollTrigger);

function Ads() {
  const menuRef = useRef(null);
  const cateRef = useRef(null);
  const adsItemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      { opacity: 0},
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: menuRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cateRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cateRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Ads-content",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    adsItemsRef.current.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    });
  }, []);

  const RoasReport = [
    {
      logo: vdlogo,
      roas: "10.3",
    },
    {
      logo: bmlogo,
      roas: "11.9",
    },
    {
      logo: kintakunlogo,
      roas: "13.0",
    },
    {
      logo: intheboxlogo,
      roas: "15.0",
    },
  ];

  const RoasCate = [
    {
      icon: Smile,
      cate: "Lifestyle",
      roas: "15.0",
    },
    {
      icon: Shield,
      cate: "Health",
      roas: "11.0",
    }
  ];  

  return (
    <div className="Ads-container">
      <div ref={menuRef}>
        <Menu
          icon={BarChart2}
          title={"Ads Optimization"}
          description={"Maximize your ad performance with data-driven strategies, precise targeting, and continuous optimization for higher engagement and conversions."}
        />
      </div>

      <div className="Ads-category" ref={cateRef}>
        {RoasCate.map((item, index) => (
          <Adscate
            key={index}
            icon={item.icon}
            cate={item.cate}
            roas={item.roas}            
          />
        ))}
      </div>

      <div className="Ads-content">
        {RoasReport.map((item, index) => (
          <div
            key={index}
            ref={(el) => (adsItemsRef.current[index] = el)} // Simpan referensi setiap item
          >
            <AdsItem logo={item.logo} roas={item.roas} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ads;
