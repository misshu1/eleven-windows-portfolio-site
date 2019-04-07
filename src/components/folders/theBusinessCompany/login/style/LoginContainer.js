import styled from "styled-components";

export const LoginContainer = styled.div`
    position: relative;
    background: #53b8c4;
    height: 3rem;
    padding: 0 1rem;
    line-height: 3rem;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 0.8rem;
    font-size: 4vw;

    && button {
        color: #fff;
        outline: none;
        border: none;
        background: transparent;
    }
    @media (min-width: 25rem) {
        && {
            font-size: 1rem;
        }
    }
`;
