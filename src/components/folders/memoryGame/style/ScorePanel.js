import styled from "styled-components";

export const ScorePanel = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;

    && :nth-child(1) {
        display: flex;
        padding: 0;
        li {
            list-style: none;
            display: inline-block;
        }
    }

    && :nth-child(4) {
        font-weight: 900;
        font-size: 1.1rem;
        color: #fff;
        background: #29c43d;
        padding: 0.7rem;
        width: fit-content;
        border-radius: 5px;
        cursor: pointer;
    }
    @media (min-width: 40em) {
        width: 30rem;
    }
`;
