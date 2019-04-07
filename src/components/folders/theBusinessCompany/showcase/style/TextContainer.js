import styled from "styled-components";

export const TextContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 1.4rem;
    bottom: 10vw;
    left: 0.9rem;
    left: 5vw;
    color: #fff;
    font-weight: 500;

    && [data-plus] {
        margin: 0 0 0.2rem 0.2rem;
        margin: 0 0 1vw 1vw;
        color: #fff;
        background: #53b8c4;
        height: 0.8rem;
        height: 4vw;
        width: 0.8rem;
        width: 4vw;
        line-height: 0.7rem;
        line-height: 3vw;
        align-self: flex-end;
        text-align: center;
    }

    && h2 {
        margin: 0;
        line-height: 1.3rem;
        line-height: 9vw;
        padding: 0;
        text-transform: uppercase;
        font-size: 1.3rem;
        font-size: 9vw;
    }

    && span {
        display: block;
        font-size: 0.8rem;
        font-size: 4vw;
    }

    @media (min-width: 800px) {
        && {
            bottom: 5rem;
            left: 2.5rem;
        }

        && h2 {
            font-size: 4.5rem;
            line-height: 4.5rem;
        }

        && span {
            font-size: 2rem;
        }
        && [data-plus] {
            margin: 0 0 0.4rem 0.4rem;
            height: 2rem;
            width: 2rem;
            line-height: 1.6rem;
        }
    }
`;
