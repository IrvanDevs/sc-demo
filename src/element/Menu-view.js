import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";


const MenuCard = ({ title, description, viewMoreLink }) => {
    return (
    <div className="Menu">
        <div className="Menu-content">
            <p className="Menu-title">{title}</p>
            <p className="Menu-desc">{description}</p>
        </div>
        
        <div className="View-button">
            <Link className="Menu-link" to={viewMoreLink}>
                <span>View More</span>
            </Link>
        </div>
    </div>
    );
};
  
export default MenuCard;
  