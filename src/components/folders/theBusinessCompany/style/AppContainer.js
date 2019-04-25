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

    @media (min-width: 28em) {
        height: 44rem;
        width: 47rem;
        padding-bottom: 0;
    }

    @media (min-width: 50em) {
        top: 3rem;
        left: 3rem;
    }
`;
