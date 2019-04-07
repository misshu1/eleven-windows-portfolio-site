import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    margin-top: 2rem;

    && h2 {
        margin: 0;
        font-size: 1rem;
        font-size: 6vw;
    }

    &&::before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5rem 5rem 0 0;
        border-color: #53b8c4 transparent transparent transparent;
    }
    &&::after {
        content: none;
    }
    @media (max-width: 35rem) {
        && h2 {
            text-align: center;
        }
    }
    @media (min-width: 25rem) {
        && h2 {
            font-size: 1.5rem;
        }
    }
    @media (min-width: 50rem) {
        && {
            padding: 1rem 3rem;
        }
        &&::after {
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            bottom: 0;
            right: 0;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 9rem 9rem;
            border-color: transparent transparent #53b8c4 transparent;
        }
    }
`;
