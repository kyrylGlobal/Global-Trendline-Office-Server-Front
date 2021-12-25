import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header:FC = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "": ""} to="/News">News</NavLink>
                    </li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;