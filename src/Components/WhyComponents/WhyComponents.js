import React from 'react';
import "./WhyComponentsStyles.css";

const WhyComponents = ({ iconName, titre, description }) => {
    return (
        <div>
            <i className={iconName} />
            <h4 className="why-title">{titre}</h4>
            <p className="why-desc">{description}</p>
        </div>
    );
};

export default WhyComponents;
