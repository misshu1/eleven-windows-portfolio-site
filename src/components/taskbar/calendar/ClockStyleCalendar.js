import styled from "styled-components";

const ClockStyleCalendar = styled.div`
    padding: 1.5rem;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    && span:nth-child(1) {
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }
    && span:nth-child(2) {
        color: #bababa;
        text-transform: uppercase;
        font-size: 1.2rem;
    }
    && span:nth-child(3) {
        width: fit-content;
        font-size: 0.9rem;
        display: block;
        color: rgb(0, 110, 220);
    }
    && span:nth-child(3):hover {
        color: #bababa;
    }
`;

export default ClockStyleCalendar;
