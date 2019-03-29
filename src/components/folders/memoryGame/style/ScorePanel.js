import styled from "styled-components";

export const ScorePanel = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem;

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
    @media (min-width: 660px) {
        width: 30rem;
    }
`;
