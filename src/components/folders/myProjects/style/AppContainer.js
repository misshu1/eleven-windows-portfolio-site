import styled from "styled-components";

export const AppContainer = styled.section`
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    @media (min-width: 28em) {
        height: 44rem;
        width: 50rem;
        padding-bottom: 0;
    }

    @media (min-width: 50em) {
        top: 2rem;
        left: 2rem;
    }
`;
