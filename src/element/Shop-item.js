import React from "react";
import "./Shop-item.css";

function Shopitem({ profile, gmv, roas, platforms }) {
  return (
    <div className="Shopitem-container">
      <div className="Shopitem-wrapper">
        <img className="Shop-profile" src={profile} alt="shop" />
        <div className="Shop-desc">
          <div className="Shop-flex Shop-gmv">
            <p>Increase GMV: </p>
            <p className="highlight">{gmv}%</p>
          </div>
          <div className="Shop-flex Shop-roas">
            <p>Top ROAS: </p>
            <p className="highlight">{roas}</p>
          </div>
        </div>
        <div className="Shop-link">
          {platforms.map((platform, index) => (
            <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
              <img src={platform.logo} alt="platform" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shopitem;