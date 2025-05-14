import React, { useState, useEffect, useRef } from "react";
import ProChart from "../element/ProChart";
import "./Cate.css";

const Cate = () => {
    const [healthPercentage, setHealthPercentage] = useState(0);
    const [skincarePercentage, setSkincarePercentage] = useState(0);
    const [othersPercentage, setOthersPercentage] = useState(0);
    const cateRef = useRef(null); 
    const titleRef = useRef(null); 

    // Function to simulate the percentage count effect
    const animatePercentage = (target, setter) => {
        let start = 0;
        const interval = setInterval(() => {
            if (start < target) {
                start += 50; // Adjust speed by changing the increment
                setter(Math.min(start, target));
            } else {
                clearInterval(interval);
            }
        }, 10); // Adjust speed by changing the interval (in ms)
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animatePercentage(52.63, setHealthPercentage);
                animatePercentage(26.33, setSkincarePercentage);
                animatePercentage(21.05, setOthersPercentage);
            }
        }, { threshold: 0.1 });

        if (cateRef.current) {
            setTimeout(() => observer.observe(cateRef.current), 100);
        }

        const titleObserver = new IntersectionObserver((entries) => {
            if (!titleRef.current) return;
            if (entries[0].isIntersecting) {
                titleRef.current.classList.add('pop-in');
            } else {
                titleRef.current.classList.remove('pop-in');
            }
        }, { threshold: 0.5 });

        if (titleRef.current) {
            setTimeout(() => titleObserver.observe(titleRef.current), 100);
        }

        return () => {
            if (cateRef.current) {
                observer.unobserve(cateRef.current);
            }
            if (titleRef.current) {
                titleObserver.unobserve(titleRef.current);
            }
            observer.disconnect();
            titleObserver.disconnect();
        };
    }, []);

    return (
        <div className="Cate-container" ref={cateRef}>
            <div className="Charts">
                <ProChart percentage={healthPercentage} label="Health" color="#123B8D" />
                <ProChart percentage={skincarePercentage} label="Skincare" color="#42B6E5" />
                <ProChart percentage={othersPercentage} label="Others" color="#000000" />
            </div>
            <div className="Title" ref={titleRef}>
                <p className="Cate-title1">BRAND <br/> HANDLE <br/> </p>
                <p className="Cate-title2">CATEGORIES</p>
            </div>
        </div>
    );
};

export default Cate;