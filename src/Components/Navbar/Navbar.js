import {  useState, useEffect } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";
import logo from "../../Image/white-logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
    const [isConnected, setIsConnected] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsConnected(true);

        }
        else {
            setIsConnected(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsConnected(false);
    };

    return (
        <nav className="NavbarItems">
            <Link to={"/"}>
                <img src={logo} alt="logo" />
            </Link>
            <div className="menu-icons" onClick={() => setIsClicked(!isClicked)}>
                <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
                {MenuData.map((item, index) => {
                    if (item.title === "Connexion" && isConnected) {
                        return null;
                    }

                    return (
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                <i className={item.icon} ></i>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
                {isConnected && (
                    <li>
                        <button className="btn" onClick={handleLogout}>Déconnexion</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
