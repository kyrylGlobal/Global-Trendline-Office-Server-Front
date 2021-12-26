import { FC } from "react";
import StyledNavLink from "../styles/StyledNavLink.styled";

const Header:FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink color="red" to="/News" >News</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink color="red" to="/Login" >Login</StyledNavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;