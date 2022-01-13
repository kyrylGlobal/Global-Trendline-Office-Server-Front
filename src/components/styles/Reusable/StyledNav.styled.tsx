import styled from "styled-components";

interface IStyledNav{
    columns?: string;
    autoColumns?: boolean;
    padding?: string;
}

const DEFAULT_COLUMNS = "3";

const StyledNav = styled.nav<IStyledNav>`
    padding: ${({padding}) => padding ? padding : "0px"};

    ul{
        display: grid;
        ${ ({columns, autoColumns}) => autoColumns ? 'grid-auto-flow: column;' : (columns ? `grid-template-columns: repeat(${columns}, 1fr);`: `grid-template-columns: repeat(${DEFAULT_COLUMNS}, 1fr);`)}
        column-gap: 10px;
        
        li{
            a{
                display: grid;
                justify-content: center;
                align-content: center;
                padding: 30px; 
                box-shadow: 0 0 5px #1b1b1b;
                border-radius: 5px;
                transition: 0.2s;

                &:hover{
                    box-shadow: 0 0 10px #1b1b1b;
                }
            }
        }
    }
`;

export default StyledNav;