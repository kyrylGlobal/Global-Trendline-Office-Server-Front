import styled from "styled-components";

const DEFAULT_BACKGROUND_COLOR: string = "white";

interface IFooterStyledComponent{
    height?: number;
    backgroundColor?: string;
}

const FooterStyledComponent = styled.footer<IFooterStyledComponent>`
    width: 100%;
    height: 100%;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : DEFAULT_BACKGROUND_COLOR};
    box-sizing: border-box;
`;

export default FooterStyledComponent;