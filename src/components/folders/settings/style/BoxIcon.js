import styled from "styled-components";

export const BoxIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 28em) {
        justify-content: left;
    }
`;
