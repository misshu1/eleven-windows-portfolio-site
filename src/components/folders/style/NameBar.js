import styled from "styled-components";

export const NameBar = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background: ${props => props.theme.folderNameBarBg};

    @media (min-width: 28em) {
        position: static;
    }
`;
