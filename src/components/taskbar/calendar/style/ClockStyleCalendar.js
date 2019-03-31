import styled from "styled-components";

export const ClockStyleCalendar = styled.div`
    padding: 1.5rem;
    cursor: default;

    && span:nth-child(1) {
        font-size: 3rem;
        font-weight: 100;
        color: ${props => props.theme.calendarColorPrimary};
    }
    && span:nth-child(2) {
        color: ${props => props.theme.calendarColorSecondary};
        text-transform: uppercase;
        font-size: 1.2rem;
    }
    && span:nth-child(3) {
        width: fit-content;
        font-size: 0.9rem;
        display: block;
        color: ${props => props.theme.calendarTodayClock};
    }
    && span:nth-child(3):hover {
        color: ${props => props.theme.calendarColorSecondary};
    }
`;
