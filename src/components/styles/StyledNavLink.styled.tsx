import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IStyledNavLink{
    color?: string;
}

const StyledNavLink = styled(NavLink)<IStyledNavLink>`
    color: ${props => props.color ? props.color : "blue"};
    &.active {
        color: green;
    }
`;

export default StyledNavLink;