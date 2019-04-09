import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: fit-content;
    padding: 1rem;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    @media (min-width: 28em) {
        height: calc(100% - 2.5rem);
        margin-top: 0;
        flex-direction: column;
        justify-content: flex-start;
    }
`;
