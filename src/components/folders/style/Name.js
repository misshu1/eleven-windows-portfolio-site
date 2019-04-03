import styled from "styled-components";

export const Name = styled.div`
    display: flex;
    flex: 1;
    cursor: default;
    align-items: center;
    color: ${props => props.theme.textColor};
    height: 100%;
    padding-left: 1.5rem;
`;
