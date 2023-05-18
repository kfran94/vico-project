import {  useState } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";
import logo from "../../Image/white-logo.jpg";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../../Actions/UserActions";

function Navbar() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const [isClicked, setIsClicked] = useState(false);
    // const [isAdmin, setIsAdmin] = useState(false)




    const handleLogout = () => {
        dispatch(logout());
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
                    if (item.title === "Connexion" && isAuthenticated) {
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
                {isAuthenticated && (
                    <li>
                        <button className="btn" onClick={handleLogout}>Déconnexion</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
