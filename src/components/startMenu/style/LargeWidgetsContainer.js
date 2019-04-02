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
    position: relative;
    overflow: scroll;
    animation: ${slideUp} 0.4s ease-out 1 forwards;

    /* Hide Scrollbar */
    -ms-overflow-style: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    display: grid;
    grid-template-columns: repeat(4, minmax(4.7rem, 1fr));
    grid-template-rows: repeat(10, minmax(4.7rem, 1fr));
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
    padding: 1rem 1rem 3.5rem 1rem;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    @media (min-width: 28rem) {
        padding: 1rem;
    }
`;
