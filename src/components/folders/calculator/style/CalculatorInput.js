import styled from "styled-components";

const CalculatorInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: none;
    height: 9rem;
    font-size: 2rem;
    padding: 5rem 0.5rem 0.5rem 0.5rem;
    text-align: right;
    background: #202020;
    color: #d8d6de;
    /* TODO Change input font-size based on input length */
`;

export default CalculatorInput;
