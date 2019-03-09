import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}`;

const SpinnerAnimation = styled.div`
    color: #d6d8de;
    z-index: 200;
    position: absolute;
    top: calc(50% - 3.5rem);
    left: 50%;
    transform: translate(50%, calc(50% - 3.5rem));
    animation: ${rotate} 1.2s linear infinite;
`;

export default SpinnerAnimation;
