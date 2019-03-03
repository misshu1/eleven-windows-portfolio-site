import styled from "styled-components";

const Operators = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    && button {
        box-sizing: border-box;
        margin: 1px;
        padding: 0;
        border: none;
        outline: none;
        width: 5rem;
        font-size: 1.8rem;
        background: #0f0f0f;
        color: #d8d6de;
    }
    && button:hover {
        border: 1px solid #444;
        background: #212121;
    }
    && button:nth-child(5) {
        background: red;
        color: #fff;
    }
    @media (max-width: 28rem) {
        && button {
            max-height: 23vw;
            max-width: 23vw;
        }
    }
`;

export default Operators;
