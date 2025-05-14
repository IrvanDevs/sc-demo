import React, { useState, useEffect, useRef } from "react";
import "./Mcn.css";
import { Globe, ChevronLeft, ChevronRight } from "react-feather";
import Metrics from '../element/Metrics-item.js';
import Menu from '../element/Menu.js';
import McnPie from '../element/Mcn-diagram.js'

import { gsap } from "gsap";

function Mcn() {
    const containerRef = useRef(null);

    useEffect(() => {
        const element = containerRef.current;

        gsap.fromTo(
            element,
            { y: 50, opacity: 0 }, 
            {
                y: 0, 
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%", 
                    end: "top 20%", 
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    const videos = [
        {
            account: "@drkevinmak",
            category: "Education",
            views: "4.5M",
            saved: "165.6K",
            videoId: "7390664876517002502",
        },
        {
            account: "@ojankeke",
            category: "Storytelling",
            views: "4.1M",
            saved: "200.8K",
            videoId: "7390247665822485765",
        },
        {
            account: "@onyaervin",
            category: "Information",
            views: "1M",
            saved: "108",
            videoId: "7462731550745054469",
        },
        {
            account: "@devs.diary",
            category: "Product Knowledge",
            views: "1.2M",
            saved: "10.4K",
            videoId: "7457384965874011398",
        },
        {
            account: "@ulianaci",
            category: "Storytelling",
            views: "811.9K",
            saved: "383",
            videoId: "7368409228391861509",
        },
        {
            account: "@bubidann",
            category: "Information",
            views: "399.2K",
            saved: "3500",
            videoId: "7371636355568241926",
        },
        {
            account: "@nur_mujiana",
            category: "Storytelling",
            views: "315.5K",
            saved: "964",
            videoId: "7363641950307634437",
        },
        {
            account: "@rizkeeeyyyyyy",
            category: "Storytelling",
            views: "235.5K",
            saved: "968",
            videoId: "7368396069324999942",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null); // Ref to video element for animation

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    };


    useEffect(() => {
        gsap.fromTo(
            videoRef.current,
            { opacity: 0 }, 
            { opacity: 1, duration: 1, ease: "power2.out" }
        );
    }, [currentIndex]);

    return (
        <div ref={containerRef} className="Mcn Mcn-container">
            <Menu
                icon={Globe}
                title={"Multi Channel Network"}
                description={"helps manage, grow, and monetize content across platforms with optimal strategies and professional support."}
            />
            <div className="Mcn-wrapper">
                <div className="McnSlider-wrapper">
                    <button onClick={handlePrev} className="McnSlider-button">
                        <ChevronLeft size={32} />
                    </button>

                    <button onClick={handleNext} className="McnSlider-button">
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="Mcn-content">
                    <McnPie />
                    <div ref={videoRef}>
                        <Metrics
                            key={currentIndex}
                            account={videos[currentIndex].account}
                            category={videos[currentIndex].category}
                            views={videos[currentIndex].views}
                            likes={videos[currentIndex].likes}
                            saved={videos[currentIndex].saved}
                            videoId={videos[currentIndex].videoId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mcn;