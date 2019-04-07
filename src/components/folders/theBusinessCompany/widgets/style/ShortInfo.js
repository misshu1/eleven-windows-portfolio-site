import styled from "styled-components";

export const ShortInfo = styled.div`
    padding: 0 1rem;
    && h2 {
        margin: 0;
        font-size: 1.2rem;
        font-size: 6vw;
    }
    && p {
        margin: 0;
        line-height: 1.2;
        font-size: 0.8rem;
        font-size: 4vw;
    }
    @media (min-width: 25rem) {
        && h2 {
            font-size: 1.5rem;
        }
        && p {
            font-size: 1rem;
        }
    }
`;
