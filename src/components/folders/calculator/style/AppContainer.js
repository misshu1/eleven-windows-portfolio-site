import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: scale3d(0.9,0.9,0.9);
}
100% {
    opacity: 1;
    transform: scale3d(1,1,1);
}
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: scale3d(1,1,1);
}
100% {
    opacity: 0;
    transform: scale3d(0.7,0.7,0.7);
}
`;

const AppContainer = styled.section`
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: #202020;

    @media (min-width: 28em) {
        height: 42rem;
        width: 21.5rem;
        top: 9rem;
    left: 9rem;

        ${props =>
            props.calculatorOpen === "open" &&
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
`;

export default AppContainer;
