import styled from "styled-components";

export const ResultPopUp = styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: ${props => (props.matchedCards === 16 ? "box" : "none")};
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 1rem;
    text-align: center;
    padding: 2rem;
    width: 90%;
    height: 70%;
    && ul {
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;
    }
    && button {
        font-weight: 900;
        font-size: 1.5rem;
        color: #fff;
        background: #77171f;
        padding: 0.7em;
        width: 13rem;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        border: none;
    }
    @media (min-width: 450px) {
        width: 30rem;
        height: 20rem;
    }
`;
