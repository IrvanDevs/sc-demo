import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Account-item.css";

function Account({ profileImg, contentImg, growth, newMenu, newHighlight }) {
    const accountRef = useRef(null);
    const accountIMG = useRef(null);

    useEffect(() => {
      if (accountRef.current) {
        const elements = accountRef.current.children;
        gsap.fromTo(
              elements,
              { opacity: 0, y: 20, scale: 0.8 },
              { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.5, ease: "power2.out" }
        );
      } 

      gsap.fromTo(
        accountIMG.current,
        { opacity: 0, x: 20},
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
        }
      )
    }, [profileImg, growth, newMenu, newHighlight]); 


    return (
      <div className="Account-container">
        <div className="Account-wrapper" ref={accountRef}>
            <img className="Account" src={profileImg} alt="profile"/>
            <div className="Desc-wrapper">
              {newMenu && (
                <div className="Account-desc">
                    <p className="Account-menu">{newMenu}</p> 
                    <p className="Account-highlight">{newHighlight}</p>
                </div>
              )}
              <div className="Account-desc">
                  <p>Followers Growth:</p>
                  <p className="Account-highlight">{growth}</p>
              </div>
            </div>
        </div>
        <img ref={accountIMG} className="Account-content" src={contentImg} alt="Account-content"/>
      </div>
    )
}

export default Account;
