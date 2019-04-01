import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

export const StartMenu = styled.section`
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.startMenuBg};
    z-index: 150;
    animation: ${slideUp} 0.4s ease-out 1 forwards;

    @media (min-width: 28rem) {
        max-width: 28rem;
        max-height: 45.5rem;
        top: auto;
        bottom: 3.5rem;
    }
`;
