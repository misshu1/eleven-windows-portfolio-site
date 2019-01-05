import styled from "styled-components";

const ScorePanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0.6rem 0;

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
`;

export default ScorePanel;
