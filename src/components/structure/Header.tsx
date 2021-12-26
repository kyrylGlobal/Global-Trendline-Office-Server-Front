import { FC } from "react";
import HeaderStyledComponent from "../styles/Custom/HeaderStyledComponent.styled";
import StyledNavLink from "../styles/Reusable/StyledNavLink.styled";

const Header:FC = () => {
    return (
        <HeaderStyledComponent>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink color="black" to="/News" >News</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink color="black" to="/Login" >Login</StyledNavLink>
                    </li>
                </ul>
            </nav>
        </HeaderStyledComponent>
    );
}

export default Header;