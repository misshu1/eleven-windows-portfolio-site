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
    margin-left: 8rem;
    padding-right: 1rem;
    width: calc(100% - 8rem);
    animation: ${animate} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    font-size: 0.8rem;
    font-size: 4vw;

    @media (min-width: 25rem) {
        && {
            font-size: 1rem;
        }
    }
`;
