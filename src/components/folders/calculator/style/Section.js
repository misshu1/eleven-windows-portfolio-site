import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 2.5rem;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    @media (min-width: 28em) {
        padding-top: 0;
    }
`;
