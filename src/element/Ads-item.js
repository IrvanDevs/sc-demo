import React from "react";
import "./Ads-item.css";
import {ChevronsUp} from "react-feather";



function AdsItem({roas, logo}) {
    return (
      <div className="AdsItem-container">
        <div className="AdsItem-wrapper">
            <div className="Logo-wrapper">
                <img className="Roas-logo" src={logo} alt="Ads"/>
            </div>
            <div className="Roas-wrapper">
                <ChevronsUp size="50"/>
                <p className="Roas">{roas}</p>
            </div>
            <p className="Roas-desc">Increased ROAS</p>
        </div>
      </div>
    );
  }
  
  export default AdsItem;