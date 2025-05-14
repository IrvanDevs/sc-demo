import React from "react";
import { Typewriter } from "react-simple-typewriter";
import './Intro.css';
import IntroVideo from "../videos/intro.mp4";

function Intro() {
    return (
        <div className="Intro-container">
            <div className="Intro-wrapper">
                <video
                    className="Video"
                    src={IntroVideo}
                    autoPlay
                    muted
                    loop
                    type="video/mp4"
                    playsInline
                />
                    
                <div className="Content">
                    <div className="Intro-text">
                        <p>
                            YOUR TRUSTED <br /> PARTNER IN {" "}
                            <span className="Typing-effect">
                                <Typewriter
                                    words={["BUSINESS", "BRANDING", "SUCCESS"]}
                                    loop={0}
                                    cursor
                                    cursorStyle="."
                                    typeSpeed={80}
                                    deleteSpeed={40}
                                    delaySpeed={800}
                                />
                            </span>
                        </p>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default Intro;
