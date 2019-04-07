import styled from "styled-components";

export const ShowcaseNav = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 0 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6.5vw;
    background: #53b8c4;

    && button {
        background: transparent;
        border: none;
        outline: none;
        font-size: 0.8rem;
        font-size: 4vw;
        color: #fff;
    }
    && span {
        flex: 1;
    }
    @media (min-width: 50rem) {
        && {
            justify-content: flex-end;
            height: 3rem;
        }
        && span {
            display: none;
        }
        && button {
            font-size: 1.2rem;
        }
    }
`;
