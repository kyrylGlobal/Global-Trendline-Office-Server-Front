import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DEFAULT_COLOR: string = "blue";
const DEFAULT_DECORATION: string = "none";
const DEFAULT_FONT_SIZE: number = 16;

const DEFAULT_ACTIVE_COLOR: string = "red";
const DEFAULT_ACTIVE_DECORATION: string = "none";

const NO_SELECT = `
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
-khtml-user-select: none; /* Konqueror HTML */
-moz-user-select: none; /* Old versions of Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
user-select: none; /* Non-prefixed version, currently
                      supported by Chrome, Edge, Opera and Firefox */
-webkit-user-drag: none;
-khtml-user-drag: none;
-moz-user-drag: none;
-o-user-drag: none;
user-drag: none;`;

interface IStyledNavLink{
    color?: string;
    decoration?: string;
    activecolor?: string;
    activeDecoration?: string;
    fontSize?: number;
    backgroundcolor?: string;
    activebackgroundcolor?: string;
    noselect?: string;
}

const StyledNavLink = styled(NavLink)<IStyledNavLink>`
    color: ${props => props.color ? props.color : DEFAULT_COLOR};
    text-decoration: ${({decoration}) => decoration ? decoration : DEFAULT_DECORATION};
    font-size: ${ ({fontSize}) => (fontSize ? fontSize : DEFAULT_FONT_SIZE)};
    background-color: ${ ({backgroundcolor}) => backgroundcolor ? backgroundcolor: "none"};
    
    &.active {
        color: ${({activecolor}) => activecolor ? activecolor : DEFAULT_ACTIVE_COLOR};
        text-decoration: ${({activeDecoration}) => activeDecoration ? activeDecoration : DEFAULT_ACTIVE_DECORATION};
        background-color: ${({activebackgroundcolor, backgroundcolor}) => activebackgroundcolor ? activebackgroundcolor: backgroundcolor ? backgroundcolor : "none"};
    }

    ${({noselect}) => {
        return noselect ? NO_SELECT : "";
    }}
`;

export default StyledNavLink;