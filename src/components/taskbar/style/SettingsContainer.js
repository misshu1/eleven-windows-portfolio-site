import styled from "styled-components";

export const SettingsContainer = styled.div`
    width: 33.33%;
    height: 100%;

    && a {
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: ${props => props.theme.startSmallWidgetColor};
        width: 100%;
        height: 100%;
        cursor: default;
    }
    @media (min-width: 28rem) {
        display: none;
    }
`;
