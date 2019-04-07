import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    margin-top: 2.5rem;
    width: 100%;
    height: calc(100% - 2.5rem);
    padding: 1.5rem;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    @media (min-width: 28em) {
        margin-top: 0;
    }
`;