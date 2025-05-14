import React, { useState, useEffect, useRef } from "react";
import "./Insight.css";
import InsightItem from "../element/Insight-Item.js"; 
import Menu from '../element/Menu.js';
import { BarChart2, ChevronLeft, ChevronRight } from "react-feather";  
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bmlogo from "../images/logo/blackmores.png";
import kalbegraph from "../images/insight/kalbe-graph.png";
import kalbeinc from "../images/insight/kalbe-inc.png";
import vdlogo from "../images/logo/vitamindiskon.png";
import srigraph from "../images/insight/sri-graph.png";
import sriinc from "../images/insight/sri-inc.png";
import kintakunlogo from "../images/logo/kintakun.png";
import kintakungraph from "../images/insight/kintakun-graph.png";
import nutrimaxlogo from "../images/logo/nutrimax.png";
import nutrimaxinc from "../images/insight/nutrimax-inc.png";
import hannochslogo from "../images/logo/hannochs.png";
import hannochsinc from "../images/insight/hannochs-inc.png";
import intheboxlogo from "../images/logo/inthebox.png";
import intheboxinc from "../images/insight/inthebox-inc.png";

gsap.registerPlugin(ScrollTrigger);

const insightItems = [
    {
        title: "PT. KALBE BLACKMORES NUTRITION",
        logo: bmlogo,
        doItems: ["Shop Management", "Warehouse & Fulfillment", "Live Streaming", "Short Video", "Ads Management", "MCN Campaign"],
        images: [kalbegraph, kalbeinc]
    },
    {
        title: "PT. SAMUDRA RETAIL INDONESIA",
        logo: vdlogo,
        doItems: ["Shop Management", "Warehouse & Fulfillment", "Live Streaming", "Short Video", "Ads Management", "MCN Campaign"],
        images: [srigraph, sriinc]
    },
    {
        title: "PT. SUBUR ANUGERAH SENTOSA",
        logo: kintakunlogo,
        doItems: ["Shop Optimization", "Ads Consultation", "Live Streaming Optimization", "Short Video Optimization", "Account Strategy", "Account Analyzing"],
        images: [kintakungraph]
    },
    {
        title: "PT. SURYAPRANA NUTRISINDO",
        logo: nutrimaxlogo,
        doItems: ["Live Streaming", "SKU Optimization", "Live Optimization", "A/B Test Live Schedule", "Host Training"],
        images: [nutrimaxinc]
    },
    {
        title: "PT. CITRA HANNOCHS NIAGANTARA",
        logo: hannochslogo,
        doItems: ["Live Streaming", "SKU Optimization", "Live Optimization", "A/B Test Live Schedule", "Host Training"],
        images: [hannochsinc]
    },
    {
        title: "PT. GRAHA SERIBUSATU JAYA",
        logo: intheboxlogo,
        doItems: ["Live Streaming", "SKU Optimization", "Live Optimization", "A/B Test Live Schedule", "Host Training"],
        images: [intheboxinc]
    }
];

function Insight() {    
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const itemRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0 }, 
            {
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", 
                    end: "top 20%", 
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);

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
            }
        });
    };

    const handlePrev = () => {
        changeSlide(currentIndex === 0 ? insightItems.length - 1 : currentIndex - 1, "left");
    };

    const handleNext = () => {
        changeSlide(currentIndex === insightItems.length - 1 ? 0 : currentIndex + 1, "right");
    };

    return (
      <div ref={containerRef} className="Insight-container">
        <Menu
          icon={BarChart2}
          title={"Brand Insights"}
          description={"detailed report featuring visual graphs, GMV, and conversion rates, providing a comprehensive analysis of brand performance."}
        />

        <div className="Insight-wrapper">
            <div className="Insight-content">
                <button className="Insight-slider left" onClick={handlePrev}><ChevronLeft /></button>
                <div ref={itemRef}>
                    <InsightItem 
                        title={insightItems[currentIndex].title}
                        logo={insightItems[currentIndex].logo}
                        doItems={insightItems[currentIndex].doItems}
                        images={insightItems[currentIndex].images}
                    />
                </div>
                <button className="Insight-slider right" onClick={handleNext}><ChevronRight /></button>
            </div>

            <div className="Dots-container">
                {insightItems.map((_, index) => (
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

export default Insight;
