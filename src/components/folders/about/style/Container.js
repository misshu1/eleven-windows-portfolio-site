import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 2.5rem 1.5rem;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    && p {
        line-height: 1.3;
    }

    @media (min-width: 28em) {
        height: calc(100% - 2.5rem);
        padding: 1.5rem;
    }
`;
