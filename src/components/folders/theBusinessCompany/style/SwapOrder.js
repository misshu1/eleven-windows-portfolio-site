import styled from "styled-components";

export const SwapOrder = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 50rem) {
        flex-direction: column-reverse;
    }
`;
