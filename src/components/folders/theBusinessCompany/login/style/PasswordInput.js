import styled from "styled-components";

export const PasswordInput = styled.input.attrs(() => ({
    type: "password",
    placeholder: "Your password"
}))`
    padding: 0.5rem;
    background: #8c8c8c;
    outline: none;
    border: none;
    color: whitesmoke;
    width: 100%;
    margin: 0.2rem;
    ::placeholder {
        color: whitesmoke;
    }
`;
