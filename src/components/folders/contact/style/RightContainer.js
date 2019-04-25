import styled from "styled-components";

export const RightContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 2rem 2rem 4.5rem 2rem;
    background: rgba(0, 0, 0, 0.3);

    @media (min-width: 28em) {
        width: 50%;
        height: 100%;
        padding: 2rem;
    }
`;
