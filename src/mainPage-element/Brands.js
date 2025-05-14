import React from "react";
import Marquee from 'react-fast-marquee';
import './Brands.css';
import brand1 from "../images/brand-1.png"
import brand2 from "../images/brand-2.png"
import brand3 from "../images/brand-3.png"
import brand4 from "../images/brand-4.png"


const brands = [brand1, brand2, brand3, brand4];

function Brands(){
    return(
        <div className= "Brands-container">
            <p>TRUSTED BY 100+ BRANDS <br/><span>IN VARIOUS CATEGORIES</span></p>

            <div className= "Brands-scroll">
                {brands.map((brand,index) => (
                    <Marquee pauseOnHover key={index} speed={50} direction={index % 2 === 0 ? "left": "right"}>
                        <img className="Brand-img" src={brand} alt={`brand-${index + 1}`} />
                    </Marquee>
                ))}
            </div>
        </div>
    );
}

export default Brands;