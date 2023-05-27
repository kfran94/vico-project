import React from 'react';
import "./ServicesComponentsStyles.css"

const ServicesComponents = ({ photo, titre, description }) => {
    return (
        <div>
            <img className="services-img" src={photo} alt="Photo" />
            <h3 className="services-title">{titre}</h3>
            <p className="services-desc">{description}</p>
        </div>
    );
};

export default ServicesComponents;
