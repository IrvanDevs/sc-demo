import React, { useEffect, useRef } from "react";
import "./LiveStreaming.css";
import Menu from '../element/Menu.js';
import Phone from '../images/ip14.png';
import LiveVideo from '../videos/live-design.mp4';
import { Play } from "react-feather";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LiveStreaming() {
    const containerRef = useRef(null);

    useEffect(() => {
        const element = containerRef.current;

        gsap.fromTo(
            element,
            { x: -50, opacity: 0 }, 
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

    return (
      <div ref={containerRef} className="Livestreaming LiveStreaming-container">
        <Menu
          icon={Play}
          title={"Live Streaming"}
          description={"With trained hosts, custom live design, high-quality production to maximize engagement and sales."}
        />
        <div className="LiveStreaming-wrapper">
            <div className="LiveVideo-container">
                <img className="Phone" src={Phone} />
                
                <video className="Live-video" autoPlay loop muted playsInline>
                  <source src={LiveVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div>
        </div>
      </div>
    );
}

export default LiveStreaming;
