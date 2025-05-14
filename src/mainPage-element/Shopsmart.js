import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "../element/Menu.js";
import { ShoppingBag, ChevronLeft, ChevronRight } from "react-feather";
import "./Shopsmart.css";
import Shopitem from "../element/Shop-item.js";

import vdshop from "../images/shop/vd-shop.png";
import bmshop from "../images/shop/bm-shop.png";
import ultrasaktishop from "../images/shop/ultrasakti-shop.png";
import nwshop from "../images/shop/nw-shop.png";
import roskenshop from "../images/shop/rosken-shop.png";
import titisanshop from "../images/shop/titisan-shop.png";
import besthoneyshop from "../images/shop/besthoney-shop.png";
import lytacurshop from "../images/shop/lytacur-shop.png";

import tiktok from "../images/logo/tts.png";
import shopee from "../images/logo/shopee.png";
import tokped from "../images/logo/tokped.png";
import lazada from "../images/logo/lazada.png";

gsap.registerPlugin(ScrollTrigger);

function Shopsmart() {
  const scrollRef = useRef(null);
  const shopsmartRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);
  const sliderRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      { opacity: 0 },
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
      sliderRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Auto-scroll aktif saat 50% elemen terlihat
    );

    if (shopsmartRef.current) {
      observer.observe(shopsmartRef.current);
    }

    return () => {
      if (shopsmartRef.current) {
        observer.unobserve(shopsmartRef.current);
      }
    };
  }, []);

  const smoothScroll = (distance) => {
    if (scrollRef.current) {
      gsap.to(scrollRef.current, {
        scrollLeft: scrollRef.current.scrollLeft + distance,
        duration: 0.1,
        ease: "power2.out",
      });
    }
  };

  const scrollLeft = () => smoothScroll(-400);
  const scrollRight = () => smoothScroll(400);

  useEffect(() => {
    if (!isVisible || isUserScrolling) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          gsap.to(scrollRef.current, { scrollLeft: 0, duration: 1, ease: "power2.out" });
        } else {
          smoothScroll(600);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, isUserScrolling]);

  useEffect(() => {
    const handleUserScroll = () => {
      setIsUserScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => setIsUserScrolling(false), 100);
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleUserScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleUserScroll);
      }
    };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        gsap.to(".scroll-progress", { width: `${progress}%`, duration: 0.1, ease: "power1.in" });
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", updateProgress);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", updateProgress);
      }
    };
  }, []);

  const shopData = [
    {
      profile: vdshop,
      gmv: "+112",
      roas: "30",
      platforms: [
        { logo: tiktok, link: "https://www.tiktok.com/@vitamindiskon" },
        { logo: shopee, link: "https://shopee.co.id/vitamindiskon" },
      ],
    },
    {
      profile: ultrasaktishop,
      gmv: "+13",
      roas: "7",
      platforms: [
        { logo: shopee, link: "https://shopee.co.id/ultrasakti" },
        { logo: tokped, link: "https://www.tokopedia.com/ultrasakti" },
        { logo: lazada, link: "https://www.lazada.co.id/shop/ultra-sakti" },
      ],
    },
    {
      profile: nwshop,
      gmv: "+18",
      roas: "3",
      platforms: [
        { logo: tiktok, link: "https://www.tiktok.com/@natureswayindonesia" },
        { logo: shopee, link: "https://shopee.co.id/natureswayindonesia" },
        { logo: tokped, link: "https://www.tokopedia.com/natureswayindonesia" },
      ],
    },
    {
      profile: roskenshop,
      gmv: "+22",
      roas: "4",
      platforms: [
        { logo: tiktok, link: "https://www.tiktok.com/@roskenindonesia" },
        { logo: shopee, link: "https://shopee.co.id/roskenindonesia" },
        { logo: tokped, link: "https://www.tokopedia.com/roskenindonesia" },
      ],
    },
    {
      profile: titisanshop,
      gmv: "+112",
      roas: "2",
      platforms: [
        { logo: shopee, link: "https://shopee.co.id/titisan.official" },
        { logo: tokped, link: "https://www.tokopedia.com/titisanofficial" },
      ],
    },
    {
      profile: besthoneyshop,
      gmv: "+40",
      roas: "9",
      platforms: [{ logo: shopee, link: "https://shopee.co.id/besthoneyindonesia" }],
    },
  ];

  return (
    <div className="Shop-container" ref={shopsmartRef}>
      <div className="Border-line" ref={lineRef}></div>
      <div ref={menuRef}>
        <Menu icon={ShoppingBag} title={"Shop Smart"} description={"helps online stores enhance efficiency, manage inventory, and optimize pricing and promotions."} />
      </div>

      <div className="Shop-scroll" ref={sliderRef}>
        <button className="Scroll-button left" onClick={scrollLeft}>
          <ChevronLeft size={24} />
        </button>

        <div className="Shop-wrapper" ref={scrollRef}>
          {shopData.map((shop, index) => (
            <Shopitem key={index} profile={shop.profile} gmv={shop.gmv} roas={shop.roas} platforms={shop.platforms} />
          ))}
        </div>

        <button className="Scroll-button right" onClick={scrollRight}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-progress" />
      </div>
    </div>
  );
}

export default Shopsmart;
