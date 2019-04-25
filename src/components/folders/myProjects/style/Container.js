import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    /* margin: 2.5rem 0; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-height: 100%;
    padding: 3.5rem 1rem 1rem 1rem;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    @media (min-width: 28em) {
        height: calc(100% - 2.5rem);
        padding: 1rem;
        flex-direction: column;
        justify-content: flex-start;
    }
`;
