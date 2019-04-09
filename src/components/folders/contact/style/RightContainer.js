import styled from "styled-components";

export const RightContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.3);
    @media (min-width: 28em) {
        width: 50%;
        height: 100%;
    }
`;
