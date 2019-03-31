import styled from "styled-components";

export const NameBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    border-bottom: 1px solid ${props => props.theme.folderBorder};
`;
