import styled from "styled-components";

export const NameBar = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background: ${props => props.theme.folderNameBarBg};
    z-index: 10;
    transition: background 0.2s ease-in-out;

    /* Back button for My Projects folder */
    .back-arrow {
        color: ${props =>
            props.showProjectsList ? "#999" : props.theme.backButtonColor};
        padding-left: 1rem;
        font-size: 1.3rem;
    }

    @media (min-width: 28em) {
        z-index: auto;
        position: static;
    }
`;
