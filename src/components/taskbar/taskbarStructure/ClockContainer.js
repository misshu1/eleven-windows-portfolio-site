import styled from "styled-components";

const ClockContainer = styled.div`
    display: none;
    @media (min-width: 450px) {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        background: yellow;
        height: 100%;
        width: 7rem;
    }
`;

export default ClockContainer;
