import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0% {
    transform: translate3d(0, 15%, 0);
}
100% {
    transform: translate3d(0, 0, 0);
}
`;

export const LargeWidgetsContainer = styled.div`
    box-sizing: border-box;
    overflow: auto;
    animation: ${slideUp} 0.4s ease-out 1 forwards;

    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(10, 4.7rem);
    grid-template-areas:
        "widget-1 widget-1 widget-1 widget-1"
        "widget-1 widget-1 widget-1 widget-1"
        "widget-2 widget-2 widget-3 widget-3"
        "widget-2 widget-2 widget-3 widget-3"
        "widget-4 widget-4 widget-5  widget-6"
        "widget-4 widget-4 widget-7  widget-8"
        "widget-9 widget-9 widget-9 widget-9"
        "widget-9 widget-9 widget-9 widget-9"
        "widget-10 widget-10 widget-11 widget-11"
        "widget-10 widget-10 widget-11 widget-11";
    grid-gap: 1rem;
    padding: 1rem;
    width: 100%;

    @media (min-width: 28rem) {
        width: calc(100% + 5rem);
    }
`;
