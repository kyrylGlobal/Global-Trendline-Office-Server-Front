import styled, { Keyframes, keyframes } from "styled-components";

interface Info{
    animation?: Keyframes;
    animation_time?: string;
}

export const showHideWindow = keyframes`
    0% {opacity: 0; visibility: visible }
    50% {opacity: 1}
    100% {opacity: 0}
`;

const InfoStyledComponent = styled.section<Info>`
    position: fixed;
    bottom: 40px;
    left: 40px;
    background-color: green;
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px #3b3b3b;
    opacity: 0;

    visibility: hidden;

    animation: ${({animation}) => animation && animation} ${({animation_time}) => animation_time ? animation_time : "2s"};
`;

export default InfoStyledComponent;