import React, { useState, useEffect, useRef } from "react";
import "./ShortVideo.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import Metrics from '../element/Metrics-item.js';
import Menu from '../element/Menu.js';
import {Video} from "react-feather";

import { gsap } from "gsap";

function ShortVideo() {
    const containerRef = useRef(null);

    useEffect(() => {
        const element = containerRef.current;

        gsap.fromTo(
            element,
            { x: 50, opacity: 0 }, 
            {
                x: 0, 
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
            account: "@vitaminDiskon",
            category: "Education",
            views: "23.6M",
            saved: "200.8K",
            videoId: "7470089056697863429",
        },
        {
            account: "@vitaminDiskon",
            category: "Education",
            views: "18.3M",
            saved: "590.4K",
            videoId: "7367687192103226630",
        },
        {
            account: "@blackmoresIndonesia",
            category: "Product Knowledge",
            views: "707.5K",
            saved: "10.7K",
            videoId: "7307981806144343301",
        },
        {
            account: "@blackmoresIndonesia",
            category: "Product Knowledge",
            views: "511.4K",
            saved: "5594",
            videoId: "7312292525425888517",
        },
        {
            account: "@eiyoskinofficial",
            category: "Education",
            views: "118.5K",
            saved: "36",
            videoId: "7350288976869362949",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null); 

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
        <div ref={containerRef} className="Shortvideo ShortVideo-container">
            <Menu
                icon={Video}
                title={"Short Video"}
                description={"Create engaging short videos with high-quality equipment, professional editing, and strategic content."}
            />
            <div className="ShortVideo-wrapper">
                <div className="Slidebtn-wrapper">
                    <button onClick={handlePrev} className="Slider-button">
                        <ChevronLeft size={32} />
                    </button>

                    <button onClick={handleNext} className="Slider-button">
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="VideoSlider-container">
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

export default ShortVideo;