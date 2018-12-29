import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0% {
    transform: translateY(80%);
}
100% {
    transform: translateY(0);
}
`;

const LargeWidgetsContainer = styled.div`
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
    grid-template-rows: repeat(10, 4.7em);
    grid-template-areas:
        "widget-j widget-j widget-j widget-j"
        "widget-j widget-j widget-j widget-j"
        "widget-z widget-x widget-M  widget-M"
        "widget-c widget-v widget-M  widget-M"
        "widget-L widget-L widget-L widget-L"
        "widget-L widget-L widget-L widget-L"
        "widget-e widget-e widget-r widget-r"
        "widget-e widget-e widget-r widget-r"
        "widget-q widget-q widget-w widget-w"
        "widget-q widget-q widget-w widget-w";
    grid-gap: 1rem;
    padding: 1rem;
    width: 100%;
    background: ${props => props.theme.primary};
    @media (min-width: 450px) {
        width: calc(100% + 5rem);
    }
`;

export default LargeWidgetsContainer;
