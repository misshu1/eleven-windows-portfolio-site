import styled from "styled-components";

export const Tehnologies = styled.div`
    display: none;

    && img {
        display: none;
    }

    @media (min-width: 28em) {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 1rem;
        font-size: 1rem;

        && img {
            display: block;
            width: 1rem;
            height: 1rem;
        }
    }
`;
