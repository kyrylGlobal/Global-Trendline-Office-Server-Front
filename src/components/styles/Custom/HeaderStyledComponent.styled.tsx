import styled from "styled-components";

const DEFAULT_BACKGROUND_COLOR: string = "white";

interface IHeaderStyledComponent{
    height?: number;
    backgroundColor?: string;
}

const HeaderStyledComponent = styled.header<IHeaderStyledComponent>`
    width: 100%;
    height: 100%;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : DEFAULT_BACKGROUND_COLOR};
    box-sizing: border-box;
    display: grid;
    position: relative;
    box-sizing: border-box;
    /* @media  (min-width: 1000px){
        background-color: red;
    } */
`;

export default HeaderStyledComponent;