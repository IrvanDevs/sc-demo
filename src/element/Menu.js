import React from "react";
import './Menu.css';

const MenuCard = ({ title, description, icon: Icon }) => {
    return (
    <div className="Menu">
        <div className="Menu-content">
            <div className="Title-wrapper">
                <Icon />
                <p className="Menu-title">{title}</p>
            </div>
            <p className="Menu-desc">{description}</p>
        </div>
    </div>
    );
};
  
export default MenuCard;
  