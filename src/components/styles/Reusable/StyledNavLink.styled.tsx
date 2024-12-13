import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DEFAULT_COLOR: string = "blue";
const DEFAULT_DECORATION: string = "none";
const DEFAULT_FONT_SIZE: string = "16px";

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
user-drag: none`;

interface IStyledNavLink{
    color?: string;
    decoration?: string;
    activecolor?: string;
    active_decoration?: string;
    font_size?: string;
    backgroundcolor?: string;
    activebackgroundcolor?: string;
    noselect?: string;
    padding?: string;
    is_box_shadow_effect?: string; // if true then type true
    is_text_shadow_effect?: string;
    height?: string;
}

const StyledNavLink = styled(NavLink)<IStyledNavLink>`
    color: ${props => props.color ? props.color : DEFAULT_COLOR};
    text-decoration: ${({decoration}) => decoration ? decoration : DEFAULT_DECORATION};
    font-size: ${ ({font_size}) => (font_size ? font_size : DEFAULT_FONT_SIZE)};
    background-color: ${ ({backgroundcolor}) => backgroundcolor ? backgroundcolor: "none"};
    padding: ${({padding}) => padding ? padding : "0px"};
    box-shadow:${({is_box_shadow_effect}) => is_box_shadow_effect ? "0 0 5px #1b1b1b" : ''};
    height: ${({height}) => height && height};

    &:hover{
        box-shadow:${({is_box_shadow_effect}) => is_box_shadow_effect &&  "0 0 10px #1b1b1b"};
        text-shadow: ${({is_text_shadow_effect}) => is_text_shadow_effect && "0 0 10px #363636"}
    }
    
    &.active {
        color: ${({activecolor}) => activecolor ? activecolor : DEFAULT_ACTIVE_COLOR};
        text-decoration: ${({active_decoration}) => active_decoration ? active_decoration : DEFAULT_ACTIVE_DECORATION};
        background-color: ${({activebackgroundcolor, backgroundcolor}) => activebackgroundcolor ? activebackgroundcolor: backgroundcolor ? backgroundcolor : "none"};
    }

    ${({noselect}) => noselect ? NO_SELECT : ""};
`;

export default StyledNavLink;