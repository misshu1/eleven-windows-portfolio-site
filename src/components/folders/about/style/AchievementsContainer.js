import styled from "styled-components";

export const AchievementsContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    background: #e8e8e8;
    color: black;
    min-width: 100%;
    max-width: 30rem;
    min-height: 6.25rem;
    padding: 0.5rem;
    margin: 1rem auto;
    border-radius: 0.5rem;

    && img {
        width: 6.25rem;
        height: 6.25rem;
    }

    && div {
        justify-content: center;
    }
`;
