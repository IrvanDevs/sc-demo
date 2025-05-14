import React, { useState, useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./ProChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProChart = ({ percentage, label, color }) => {
    const [inView, setInView] = useState(false);
    const [textInView, setTextInView] = useState(false); 
    const [displayPercentage, setDisplayPercentage] = useState(0); // State for animating the percentage
    const chartRef = useRef(null); 
    const textRef = useRef(null); 

    const data = {
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: [color, "#EAEAEA"],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: "75%",
        interaction: { mode: null },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart',
            animateScale: true,
            animateRotate: true,
        },
    };

    // Function to animate the percentage display
    const animatePercentage = () => {
        let start = 0;
        const interval = setInterval(() => {
            if (start < percentage) {
                start += 0.5; // Increment the percentage value
                setDisplayPercentage(Math.min(start, percentage)); // Ensure the value doesn't exceed the target
            } else {
                clearInterval(interval);
            }
        }, 10); // Adjust the speed of animation here
    };

    useEffect(() => {
        const chartObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true); 
                    setTextInView(true); // Trigger text animation as well when chart is in view
                    animatePercentage(); // Start percentage animation when in view
                } else {
                    setInView(false); 
                    setTextInView(false); // Reset text animation if it's out of view
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the chart is in view
            }
        );

        if (chartRef.current) {
            chartObserver.observe(chartRef.current); // Observe the chart container
        }

        // Cleanup observer on component unmount
        return () => {
            if (chartRef.current) {
                chartObserver.unobserve(chartRef.current);
            }
        };
    }, [percentage]);

    return (
        <div className="chart-container">
            <div className="chart-wrapper" ref={chartRef}>
                {inView && <Doughnut data={data} options={options} key={inView} />}
                <div className={`chart-label ${inView ? "show-label" : ""}`}>{displayPercentage.toFixed(2)}%</div>
            </div>
            <p
                className={`chart-text ${textInView ? "fade-in" : ""}`}
                ref={textRef}
            >
                {label}
            </p>
        </div>
    );
};

export default ProChart;
