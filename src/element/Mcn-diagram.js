import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './Mcn-diagram.css';

gsap.registerPlugin(ScrollTrigger);

const data = [
  { name: 'Mom and Baby-Kids', value: 30, color: '#e661a3' },
  { name: 'Health', value: 30, color: '#2daf2d' },
  { name: 'Lifestyle', value: 15, color: '#e0bf01' },
  { name: 'Beauty - Skincare', value: 10, color: '#eb8100' },
  { name: 'Home and Living', value: 5, color: '#7bbfda' },
  { name: 'Sport', value: 5, color: '#7d26ce' },
  { name: 'Foodies', value: 5, color: '#da3a00' }
];
    
const McnPie = () => {
  const pieRef = useRef(null);

    useEffect(() => {
      gsap.fromTo(
        pieRef.current,
        { scale: 0},
        {
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: pieRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, []);

  return (
    <div className="Pie-container" ref={pieRef}>
      <p className="Pie-title">
        CREATOR'S CATEGORY
      </p>
      <div className="Pie-wrapper">
        <PieChart width={500} height={350} className='PieChart'>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => `${entry.value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend wrapperStyle={{  fontSize: '15px' }} />
        </PieChart>
      </div>
    </div>
  );
};

export default McnPie;