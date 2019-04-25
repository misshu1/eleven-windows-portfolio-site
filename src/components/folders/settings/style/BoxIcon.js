import styled from "styled-components";

export const BoxIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2.5rem;

    @media (min-width: 28em) {
        justify-content: left;
    }
`;
