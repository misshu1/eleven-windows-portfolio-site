import styled from "styled-components";

const NumberPad = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
    && button {
        box-sizing: border-box;
        background: #000;
        color: #d8d6de;
        font-size: 1.8rem;
        margin: 1px;
        padding: 0;
        border: none;
        outline: none;
        height: 6rem;
        width: 5rem;
    }
    && button:hover {
        border: 1px solid #444;
        background: #101010;
    }
    @media (max-width: 28rem) {
        && button {
            max-height: 28vw;
            max-width: 23vw;
        }
    }
`;

export default NumberPad;
