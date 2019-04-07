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
        padding: 2rem;
    }
`;
