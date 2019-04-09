import styled from "styled-components";

export const NameContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 6rem;
    height: 6rem;

    && span {
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    && img {
        height: 3.75rem;
        width: 3.75rem;
        margin: 0 auto;
        border-radius: 100%;
    }

    @media (min-width: 28em) {
        flex-direction: row;
        align-items: center;
        width: auto;
        height: auto;
        flex: 1;

        && img {
            transform: rotate3d(0, 0, 1, -90deg);
            height: 1.5rem;
            width: 2rem;
            margin: 0;
            border-radius: 0;
        }

        && span {
            white-space: normal;
            text-overflow: initial;
            text-align: left;
        }
    }
`;
