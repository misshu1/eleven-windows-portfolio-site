import styled from "styled-components";

export const Wrapper = styled.div`
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    padding: 2.5rem 2rem 2rem 2rem;
    height: 100%;

    @media (min-width: 28em) {
        height: calc(100% - 2.5rem);
        padding: 2rem;
    }
`;
