import styled from "styled-components";

export const SmallWidgetsContainer = styled.div`
    display: none;
    @media (min-width: 28rem) {
        width: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
`;
