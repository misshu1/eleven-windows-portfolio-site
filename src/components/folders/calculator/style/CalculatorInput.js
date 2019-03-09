import styled from "styled-components";

const CalculatorInput = styled.input.attrs({
    type: "text"
})`
    &&::-webkit-inner-spin-button,
    &&::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: none;
    height: 9rem;
    font-size: ${props => (props.value.length > 18 ? "1.2rem" : "2rem")};
    padding: 5rem 0.5rem 0.5rem 0.5rem;
    text-align: right;
    background: #202020;
    color: #d8d6de;
`;

export default CalculatorInput;
