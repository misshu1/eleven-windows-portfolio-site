import styled from "styled-components";

export const NameInput = styled.input.attrs({
    type: "text"
})`
    box-sizing: border-box;
    width: 100%;
    font-size: 1rem;
    padding: 1rem 0.5rem;
    margin: 1rem 0;
    background: transparent;
    border: none;
    border-bottom: solid 1px #696c70;
    color: #fff;

    &&:focus {
        outline: 1px solid #ef3271;
    }

    &&::placeholder {
        color: #fff;
        font-size: 0.7rem;
        padding-left: 0.2rem;
        text-transform: uppercase;
    }
`;
