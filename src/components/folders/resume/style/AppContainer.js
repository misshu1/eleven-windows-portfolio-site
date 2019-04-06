import styled from "styled-components";

export const AppContainer = styled.section`
    position: absolute;
    box-sizing: border-box;
    padding-bottom: 3.5rem;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    overflow: hidden;

    && iframe {
        width: 100%;
        height: calc(100% - 2.5rem);
        overflow: hidden;
        margin-top: 2.5rem;
    }

    @media (min-width: 28em) {
        height: 44rem;
        width: 44rem;
        padding-bottom: 0;
        margin-top: 0;
    }

    @media (min-width: 50em) {
        top: 10rem;
        left: 5rem;
        margin-top: 0;
    }
`;
