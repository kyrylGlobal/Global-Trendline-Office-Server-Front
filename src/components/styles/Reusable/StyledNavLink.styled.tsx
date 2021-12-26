import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DEFAULT_COLOR: string = "blue";
const DEFAULT_DECORATION: string = "none";
const DEFAULT_FONT_SIZE: number = 16;

const DEFAULT_ACTIVE_COLOR: string = "red";
const DEFAULT_ACTIVE_DECORATION: string = "none";

interface IStyledNavLink{
    color?: string;
    decoration?: string;
    activeColor?: string;
    activeDecoration?: string;
    fontSize?: number;
}

const StyledNavLink = styled(NavLink)<IStyledNavLink>`
    color: ${props => props.color ? props.color : DEFAULT_COLOR};
    text-decoration: ${({decoration}) => decoration ? decoration : DEFAULT_DECORATION};
    font-size: ${ ({fontSize}) => (fontSize ? fontSize : DEFAULT_FONT_SIZE)};

    &.active {
        color: ${({activeColor}) => activeColor ? activeColor : DEFAULT_ACTIVE_COLOR};
        text-decoration: ${({activeDecoration}) => activeDecoration ? activeDecoration : DEFAULT_ACTIVE_DECORATION};
    };
`;

export default StyledNavLink;