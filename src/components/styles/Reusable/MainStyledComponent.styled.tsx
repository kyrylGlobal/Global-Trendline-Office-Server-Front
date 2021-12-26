import styled from "styled-components";

const DEFAULT_PADDING = "0px";

interface IMainStyledComponent{
    padding?: string;
}

/**
 * Draw the main tag
 * @param {string} padding - use to set padding. Usage - 10px(top) 20px(right) 10px(bottom) 5px(left).
 */
const MainStyledComponent = styled.main<IMainStyledComponent>`
    padding: ${({padding}) => padding ? padding : DEFAULT_PADDING};
    box-sizing: border-box;
`;

export default MainStyledComponent;