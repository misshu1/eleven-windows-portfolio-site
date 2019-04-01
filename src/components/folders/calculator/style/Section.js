import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: calc(100% - 2.5rem);
    width: 100%;
    padding-top: 2.5rem;
    @media (min-width: 28em) {
        padding-top: 0;
    }
`;
