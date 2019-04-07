import styled from "styled-components";

export const AchievementsDetails = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 1rem;
    padding: 0 1rem;
    width: 100%;
    min-height: 6.25rem;

    && h2 {
        margin: 0;
    }
    && .links {
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
    }

    && .links a {
        flex: 1;
        text-decoration: none;
        cursor: default;
        color: #48a2ad;
    }
    && .links span {
    }
`;
