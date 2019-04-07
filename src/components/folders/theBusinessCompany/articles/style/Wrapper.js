import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;

    && p {
        font-size: 0.8rem;
        font-size: 4vw;
        margin: 0;
        line-height: 1.2;
        padding: 0.5rem;
    }

    && a {
        position: absolute;
        bottom: 0;
        right: 1rem;
        text-decoration: none;
        color: #53b8c4;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 900;
    }

    @media (max-width: 35rem) {
        && {
            flex-direction: column;
        }
    }

    @media (min-width: 25rem) {
        && p {
            font-size: 1rem;
        }
    }

    @media (min-width: 50rem) {
        && p {
            padding: 0 3rem 0 1.5rem;
        }
        && {
            flex-direction: row;
        }
        && a {
            color: #fff;
            font-weight: 500;
        }
    }
`;
