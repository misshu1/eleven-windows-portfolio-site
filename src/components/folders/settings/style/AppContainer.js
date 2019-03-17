import styled from "styled-components";

const AppContainer = styled.section`
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: #202020;

    @media (min-width: 28em) {
        height: 42rem;
        width: 42rem;
    }

    @media (min-width: 35em) {
        top: 10rem;
        left: 12rem;
    }
`;

export default AppContainer;
