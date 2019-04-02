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
    overflow-y: scroll;
    /* Hide Scrollbar */
    -ms-overflow-style: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 42em) {
        width: 40rem;
        height: 40rem;
        padding-bottom: 0;
    }

    @media (min-width: 60em) {
        top: 5rem;
        left: 3rem;
        width: 44rem;
        height: 44rem;
    }
`;
