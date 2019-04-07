import styled from "styled-components";

export const LoginWindow = styled.div`
    position: absolute;
    display: ${props => (props.login === "open" ? "flex" : "none")};
    z-index: 20;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 25rem;
    height: 8rem;
    padding: 1.5rem;
    margin: 0 auto;
    background: #fff;
    top: 20vh;
    left: 0;
    right: 0;

    .lock {
        display: none;
    }

    && form {
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
        width: 100%;
    }
    && button {
        display: block;
        line-height: 5rem;
        text-align: center;
        margin-left: 1rem;
        color: #fff;
        background: #53b8c4;
        height: 100%;
        min-width: 5rem;
        outline: none;
        border: none;
        font-size: 1.2rem;
    }
    @media (min-width: 400px) {
        .lock {
            font-size: 2.5rem;
            display: block;
        }
        && form {
            margin: 1rem;
        }
    }
`;
