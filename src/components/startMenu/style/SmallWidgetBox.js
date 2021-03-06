import styled from "styled-components";

export const SmallWidgetBox = styled.div`
    width: 3.5rem;
    height: 3.5rem;
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
    &&:hover {
        background: ${props => props.theme.startSmallWidgetHover};
    }
`;
