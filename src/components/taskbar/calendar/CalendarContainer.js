import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
0% {
    opacity: 0;
    transform: translateY(10%);
}
100% {
    opacity: 1;
    transform: translateY(0);
}
`;

const CalendarContainer = styled.section`
    position: absolute;
    display: ${props => (props.display === "open" ? "box" : "none")};
    border-top: 1px solid #444;
    border-left: 1px solid #444;
    bottom: 3.5rem;
    right: 0;
    width: 21.87rem;
    background: #202020;
    z-index: 150;
    animation: ${slideUp} 0.3s ease-out 1 forwards;
`;

export default CalendarContainer;
