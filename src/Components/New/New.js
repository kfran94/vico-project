import './NewStyles.css';
import apiUrl from "../../config";
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const New = ({ id, title, date, image, className }) => {
    const imageURL = apiUrl + image;

    return (
        <div className={`article-container ${className}`}>
            <div className="article-wrapper">

                <div className="article-image-container">
                    <div className="article-image-wrapper">
                        {image && <img className="article-image" src={imageURL} alt="Image de l'article" />}
                    </div>
                </div>
                <div className="article-info">
                    <h3 className="article-title">{title}</h3>
                    <p className="article-date">Date de création : {date}</p>
                </div>
                <Link to={`/article/${id}`} className="article-btn">
                    Voir l'article entier
                </Link>
            </div>
        </div>
    );
};

New.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export default New;
