import React from 'react';
import PropTypes from 'prop-types';
import './NewsStyles.css';
import apiUrl from "../../config";

const News = ({ title, date, image, content }) => {
    const imageURL = apiUrl + image;


    return (
        <div className="article-container">
            <div className="article-wrapper">
                <div className="article-header">
                    <h2 className="article-title">{title}</h2>
                    <span className="article-date"><p className="article-createdAt">Poster le {date}</p></span>
                </div>
                {image && <img className="article-image" src={imageURL} alt="Image de l'article" />}
                <div className="article-content">{content}</div>
            </div>
        </div>
    );
};

News.propTypes = {
    title: PropTypes.string.isRequired,
    CreatedAt: PropTypes.string.isRequired,
    image: PropTypes.string,
    content: PropTypes.string.isRequired,
};

export default News;
