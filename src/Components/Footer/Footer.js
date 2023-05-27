import React from 'react';
import logo from "../../Image/logo.jpg";
import './FooterStyles.css';

const Footer = () => {
    return (
        <footer>
            <div className="left-section">
                <img className="img-footer" src={logo} alt="Logo" />
            </div>
            <div className="center-section">
                <p>&copy; {new Date().getFullYear()} Coaching by Viko. Tous droits réservés.</p>
            </div>
            <div className="right-section">
                <a href="https://instagram.com/coachingbyviko?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:v.ribolowsky@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-regular fa-envelope"></i>
                </a>
                <a href="https://wa.me/33786421500" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
