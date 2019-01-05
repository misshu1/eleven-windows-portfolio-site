import styled from "styled-components";

const Deck = styled.ul`
    transform: rotateY(180deg);
    width: 35rem;
    height: 35rem;
    background: linear-gradient(160deg, #c91616 0%, #681212 100%);
    padding: 2rem;
    border-radius: 1.25rem;
    box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 3rem;

    @media (max-width: 660px) {
        width: fit-content;
    }
`;

export default Deck;
