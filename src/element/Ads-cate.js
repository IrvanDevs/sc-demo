import React from "react";
import "./Ads-cate.css";



function Adscate({cate, roas, icon: Icon}) {
    return (
      <div className="Adscate-container">
        <div className="Adscate-wrapper">
            <div className="Adscate-titlewrapper">              
                <Icon />
                <p className="Adscate-title">{cate}</p>
            </div>
            <div className="AVGRoas-wrapper">
                <p className="AVGRoas">{roas}</p>
            </div>
            <p className="AVGRoas-desc">Average ROAS</p>
        </div>
      </div>
    );
  }
  
  export default Adscate;