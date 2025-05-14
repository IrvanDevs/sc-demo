import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from 'react-fast-marquee';
import "./Achievement.css";
import ach1 from "../images/achievements/achievement1.png";
import ach2 from "../images/achievements/achievement2.png";
import ach3 from "../images/achievements/achievement3.png";
import ach4 from "../images/achievements/achievement4.png";
import ach5 from "../images/achievements/achievement5.png";
import ach6 from "../images/achievements/achievement6.png";
import ach7 from "../images/achievements/achievement7.png";
import ach8 from "../images/achievements/achievement8.png";
import ach9 from "../images/achievements/achievement9.png";
import ach10 from "../images/achievements/achievement10.png";
import ach11 from "../images/achievements/achievement11.png";
import ach12 from "../images/achievements/achievement12.jpg";
import ach13 from "../images/achievements/achievement13.jpg";
import ach14 from "../images/achievements/achievement14.jpg";
import ach15 from "../images/achievements/achievement15.jpg";
import visit1 from "../images/achievements/visit1.jpg";
import visit2 from "../images/achievements/visit2.jpg";
import visit3 from "../images/achievements/visit3.jpg";




gsap.registerPlugin(ScrollTrigger);
const achievements = [ach1, ach2, ach3, ach4, ach5, ach6, ach7, ach8, ach9, ach10, ach11];
const TSPachievements = [ach12, ach13, ach14, ach15];


function Achievement() {
    const imagesRef = useRef([]);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        imagesRef.current.forEach((img, index) => {
            gsap.fromTo(
                img,
                { opacity: 0, scale: 0.8, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 90%",
                        end: "top 30%",
                        scrub: true,
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });

        // Animasi untuk title & subtitle
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        gsap.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 50, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: subtitleRef.current,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    }, []);

    return (
        <div className="Ach-container">
            <div className="Ach-wrapper-pc">
                <div className="First-row">
                    <img ref={(el) => (imagesRef.current[0] = el)} src={ach1} alt="Achievement-1" />
                    
                    <div className="Ach-text">
                        <p ref={titleRef} className="Ach-title"> SAMUDRA COMMERCE</p>
                        <p ref={subtitleRef} className="Ach-subtitle">ACHIEVEMENTS</p>
                    </div>
                    
                    <img ref={(el) => (imagesRef.current[1] = el)} src={ach2} alt="Achievement-2" />
                </div>

                <div className="Second-row">
                    <img ref={(el) => (imagesRef.current[2] = el)} src={ach3} alt="Achievement-3" />
                    <img ref={(el) => (imagesRef.current[3] = el)} src={ach4} alt="Achievement-4" />
                    <img ref={(el) => (imagesRef.current[4] = el)} src={ach5} alt="Achievement-5" />
                </div>

                <div className="Third-row">
                    <img ref={(el) => (imagesRef.current[5] = el)} src={ach6} alt="Achievement-6" />
                    <img ref={(el) => (imagesRef.current[6] = el)} src={ach7} alt="Achievement-7" />
                    <img ref={(el) => (imagesRef.current[7] = el)} src={ach8} alt="Achievement-8" />
                    <img ref={(el) => (imagesRef.current[8] = el)} src={ach9} alt="Achievement-9" />
                    <img ref={(el) => (imagesRef.current[9] = el)} src={ach10} alt="Achievement-10" />
                    <img ref={(el) => (imagesRef.current[10] = el)} src={ach11} alt="Achievement-11" />
                </div>
            </div>

            <div className="Ach-wrapper-phone">
                <div className="Ach-text">
                    <p ref={titleRef} className="Ach-title"> SAMUDRA COMMERCE</p>
                    <p ref={subtitleRef} className="Ach-subtitle">ACHIEVEMENTS</p>
                </div>

                <div className= "Ach-scroll">
                <Marquee  pauseOnHover speed={80} direction="left" loop={0}>
                    {achievements.map((ach, index) => (
                        <img key={index} className="Ach-img" src={ach} alt={`achievements-${index + 1}`} />
                    ))}
                </Marquee>
            </div>
            </div>

            <div className="Tsp-achievements">
                {TSPachievements.map((ach, index) => (
                        <img key={index} className="TSPach-img" src={ach} alt={`TSPachievements-${index + 1}`} />
                ))}
            </div>

            <div className="Visit-achievement">
                <div className="Visit-title">
                    <p>VISITING DOUYIN PARTNER IN CHINA </p>
                </div>
                
                <div className="Visit-content">
                    <div className="Visit-pic">
                        <img src={visit2} alt="visit-2" />
                        <img src={visit1} alt="visit-1" />
                        <img src={visit3} alt="visit-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
