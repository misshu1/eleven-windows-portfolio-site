import styled, { keyframes } from "styled-components";

const animate = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, -3rem, 0) ;
 
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

export const WidgetInfo = styled.div`
    box-sizing: border-box;
    padding: 0 1rem;
    width: 100%;
    animation: ${animate} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    font-size: 0.8rem;
    font-size: 4vw;

    @media (min-width: 28rem) {
        && {
            margin-left: 8rem;
            width: calc(100% - 8rem);
            font-size: 1rem;
        }
    }
`;
