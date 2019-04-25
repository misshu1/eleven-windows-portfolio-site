import styled from "styled-components";

export const Deck = styled.ul`
    box-sizing: border-box;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3vw;
    /* transform: rotateY(180deg); */
    width: fit-content;
    height: fit-content;
    background: linear-gradient(160deg, #c91616 0%, #681212 100%);
    padding: 8vw;
    border-radius: 1.25rem;
    box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
    @media (min-width: 28em) {
        grid-gap: 1rem;
        padding: 2rem;
    }
`;
