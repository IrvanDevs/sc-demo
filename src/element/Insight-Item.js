import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Insight-Item.css";

function InsightItem({ title, logo, doItems = [], images = [] }) {
    const [currentImage, setCurrentImage] = useState(0);
    const imageRef = useRef(null);
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const listRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        gsap.fromTo(
            titleRef.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
        );

        gsap.fromTo(
            listRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 }
        );
    }, [title]); 

    useEffect(() => {
        if (images.length > 1) {
            const interval = setInterval(() => {
                gsap.to(imageRef.current, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: () => {
                        setCurrentImage(prev => (prev + 1) % images.length);

                        gsap.fromTo(
                            imageRef.current,
                            { opacity: 0, scale: 1.1 },
                            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
                        );
                    }
                });
            }, 3500);

            return () => clearInterval(interval);
        }
    }, [currentImage, images]);

    return (
      <div className="Insightitem-wrapper">
        <div className="Insight-content">
            <div className="Itemtitle-wrapper">
                <img className="Item-logo" ref={logoRef} src={logo} alt="Brand Logo" />
                <p className="Item-title" ref={titleRef}>{title}</p>
            </div>

            <div className="Do-wrapper">
                <ul>
                    {doItems.map((item, index) => (
                        <li key={index} ref={el => (listRefs.current[index] = el)}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="Insight-image">
            {images.length > 0 && (
                <img 
                    ref={imageRef} 
                    src={images[currentImage]} 
                    alt="Insight" 
                    style={images.length === 1 ? { opacity: 1 } : {}}
                />
            )}
        </div>
      </div>
    );
}

export default InsightItem;
