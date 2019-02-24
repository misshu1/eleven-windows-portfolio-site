import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: scale(0.9, 0.9, 0.9);
}
100% {
    opacity: 1;
    transform: scale(1, 1, 1);
}
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: scale(1, 1, 1);
}
100% {
    opacity: 0;
    transform: scale(0.8, 0.8, 0.8);
}
`;

const AppContainer = styled.section`
    position: absolute;
    box-sizing: border-box;
    top: 0; 
    left: 0;    
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.secundary};

    @media (min-width: 28em) {
        height: fit-content;

        ${props =>
            props.memoryGameOpen === "open" &&
            css`
                animation: ${fadeIn} 0.2s ease-out 1 forwards;
            `}
        ${props =>
            props.close === "close" &&
            css`
                animation: ${fadeOut} 0.2s ease 1 forwards;
            `}
        ${props =>
            props.appIndex === 104 &&
            css`
                -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
                box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
            `}
    }
    @media (min-width: 60em) {
        top: 5rem; 
        left: 3rem;
        width: 44rem;
    }
`;

export default AppContainer;
