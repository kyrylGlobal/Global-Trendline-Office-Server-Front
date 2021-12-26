import { NavLink } from "react-router-dom";
import styled from "styled-components";

const STATIC_COLOR: string = "blue";
const STATIC_DECORATION: string = "none";
const STATIC_FONT_SIZE: number = 16;

const STATIC_ACTIVE_COLOR: string = "red";
const STATIC_ACTIVE_DECORATION: string = "none";

interface IStyledNavLink{
    color?: string;
    decoration?: string;
    activeColor?: string;
    activeDecoration?: string;
    fontSize?: number;
}

const StyledNavLink = styled(NavLink)<IStyledNavLink>`
    color: ${props => props.color ? props.color : STATIC_COLOR};
    text-decoration: ${({decoration}) => decoration ? decoration : STATIC_DECORATION};
    font-size: ${ ({fontSize}) => (fontSize ? fontSize : STATIC_FONT_SIZE)}${"px"};

    &.active {
        color: ${({activeColor}) => activeColor ? activeColor : STATIC_ACTIVE_COLOR};
        text-decoration: ${({activeDecoration}) => activeDecoration ? activeDecoration : STATIC_ACTIVE_DECORATION};
    };
`;

export default StyledNavLink;