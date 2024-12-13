import styled from "styled-components";

interface IAppStyledComponent{
    headerHeight: string;
    mainHeight: string;
    footerHeight: string;
}

/**
 * This styled component generate a grid div.
 * Use only with Header Main and Footer styled components.
 * @param {string} headerHeight - set header height.
 * @param {string} mainHeight - set main height.
 * @param {string} footerHeight - set footer height.
 */
const AppStyledComponent = styled.div<IAppStyledComponent>`
    display: grid;
    grid-template-rows: ${({headerHeight, mainHeight, footerHeight}) => (
        `${headerHeight} ${mainHeight} ${footerHeight}`
    )};
    box-sizing: border-box;
`;

export default AppStyledComponent;