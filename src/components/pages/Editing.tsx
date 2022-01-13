import { FC } from "react";
import { Outlet } from "react-router-dom";
import StyledNav from "../styles/Reusable/StyledNav.styled";
import StyledNavLink from "../styles/Reusable/StyledNavLink.styled";

const Editing: FC = () => {
    return(
        <section>
            <StyledNav autoColumns={true} padding="0px 0px 20px 0px">
                <ul>
                    <li>
                        <StyledNavLink to="/editing/raports" 
                            backgroundcolor="#5d7ab9" activebackgroundcolor="#3963be" 
                            color="black" activecolor="white"
                            noselect="true">
                            <span>Raports</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/editing/rapor"  
                            backgroundcolor="#5d7ab9" activebackgroundcolor="#3963be" 
                            color="black" activecolor="white"
                            noselect="true">
                            <span>Raports</span>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/editing/rapo"
                            backgroundcolor="#5d7ab9" activebackgroundcolor="#3963be" 
                            color="black" activecolor="white"
                            noselect="true">
                            <span>Raports</span>
                        </StyledNavLink>
                    </li>
                </ul>
            </StyledNav>
            <Outlet />
        </section>
    );
}

export default Editing;