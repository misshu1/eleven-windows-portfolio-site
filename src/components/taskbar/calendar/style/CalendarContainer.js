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

export const CalendarContainer = styled.section`
    @import url("https://fonts.googleapis.com/css?family=Roboto:100,400");
    font-family: "Roboto", sans-serif;
    position: absolute;
    border-top: 1px solid ${props => props.theme.calendarBorder};
    border-left: 1px solid ${props => props.theme.calendarBorder};
    bottom: 3.5rem;
    right: 0;
    width: 21.87rem;
    background: ${props => props.theme.calendarBg};
    z-index: 150;
    animation: ${slideUp} 0.3s ease-out 1 forwards;
`;
