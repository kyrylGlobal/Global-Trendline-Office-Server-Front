import styled from "styled-components";

interface IAppStyledComponent{
    headerHeight: string;
    mainHeight: string;
    footerHeight: string;
}

const AppStyledComponent = styled.div<IAppStyledComponent>`
    display: grid;
    grid-template-rows: ${({headerHeight, mainHeight, footerHeight}) => (
        `${headerHeight} ${mainHeight} ${footerHeight}`
    )};
    box-sizing: border-box;
`;

export default AppStyledComponent;