import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    @media (min-width: 28em) {
        flex-direction: row;
        height: calc(100% - 2.5rem);
        margin-top: 0;
    }
`;
