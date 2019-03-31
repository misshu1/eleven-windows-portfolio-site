import styled from "styled-components";

export const Name = styled.div`
    display: flex;
    flex: 1;
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-items: center;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.background};
    height: 100%;
    padding-left: 1.5rem;
`;
