import styled from "styled-components";

export const ClockContainer = styled.div`
    display: none;
    @media (min-width: 28rem) {
        cursor: default;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        height: 100%;
        width: 7rem;
        color: ${props => props.theme.textColor};
        &&:hover {
            background: ${props => props.theme.clockHover};
        }
    }
`;
