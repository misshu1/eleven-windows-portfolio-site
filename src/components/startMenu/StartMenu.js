import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0% {
    transform: translateY(100%);
}
100% {
    transform: translateY(0);
}
`;

const StartMenu = styled.section`
    position: absolute;
    display: ${props => props.display};
    left: 0;
    top: 0;
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.primary};
    z-index: 99999999999;
    animation: ${slideUp} 0.3s ease-out 1 forwards;

    @media (min-width: 450px) {
        height: 80%;
        top: calc(20% - 3.5rem);
    }
`;

export default StartMenu;
