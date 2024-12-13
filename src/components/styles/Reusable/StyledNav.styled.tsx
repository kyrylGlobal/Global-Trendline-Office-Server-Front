import styled from "styled-components";

interface IStyledNav{
    columns?: string;
    autoColumns?: boolean;
    padding?: string;
    height?: string;
}

const DEFAULT_COLUMNS = "3";

const StyledNav = styled.nav<IStyledNav>`
    padding: ${({padding}) => padding ? padding : "0px"};
    box-sizing: border-box;

    ul{
        display: grid;
        ${ ({columns, autoColumns}) => autoColumns ? 'grid-auto-flow: column;' : (columns ? `grid-template-columns: repeat(${columns}, 1fr);`: `grid-template-columns: repeat(${DEFAULT_COLUMNS}, 1fr);`)}
        column-gap: 10px;
        height: ${({height}) => height && height};
        
        li{
            a{
                display: grid;
                justify-content: center;
                align-content: center;
                border-radius: 5px;
                transition: 0.2s;
            }
        }
    }
`;

export default StyledNav;