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
        height: 44rem;
        width: 44rem;
    }

    @media (min-width: 50em) {
        top: 10rem;
        left: 5rem;
    }
`;

export default AppContainer;
