import styled from "styled-components";

const ClockStyleCalendar = styled.div`
    padding: 1.5rem;
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
        display: block;
        color: rgb(0, 110, 220);
    }
`;

export default ClockStyleCalendar;
