import React from "react";
import "./Services.css";
import Insight from '../services/Insight';
import LiveStreaming from '../services/LiveStreaming';



function Services() {
    return (
      <div className="Services-container">
        <div className="Services-wrapper">
          <Insight />
          <LiveStreaming />
        </div>
      </div>
    );
}

export default Services;
