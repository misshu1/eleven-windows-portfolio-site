import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin-top: 2rem;
    justify-items: center;
    @media (min-width: 50rem) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
    }
`;
