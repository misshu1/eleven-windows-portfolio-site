import styled from "styled-components";

export const ClockContainer = styled.div`
    display: none;
    @media (min-width: 450px) {
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
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
