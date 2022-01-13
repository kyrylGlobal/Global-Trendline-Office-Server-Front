import { FC } from "react";
import HeaderStyledComponent from "../styles/Custom/HeaderStyledComponent.styled";
import StyledNavLink from "../styles/Reusable/StyledNavLink.styled";

const Header:FC = () => {
    return (
        <HeaderStyledComponent backgroundColor="#d16b6b">
            <nav>
                <ul>
                    <li>
                        <StyledNavLink color="black" to="/news">News</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink color="black" to="/login">Login</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink color="black" to="/editing">Raports Editing</StyledNavLink>
                    </li>
                </ul>
            </nav>
        </HeaderStyledComponent>
    );
}

export default Header;