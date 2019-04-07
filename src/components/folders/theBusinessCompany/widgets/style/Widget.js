import styled from "styled-components";

export const Widget = styled.div`
    margin: 1rem;
    display: flex;
    width: calc(100% - 2rem);
    height: 3.2rem;
    height: 24vw;
    flex-direction: row;

    @media (min-width: 50rem) {
        width: calc(100% - 2rem);
    }
    @media (min-width: 25rem) {
        && {
            height: 6rem;
        }
    }
`;
