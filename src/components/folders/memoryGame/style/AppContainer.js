import styled from "styled-components";

const AppContainer = styled.section`
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: ${props => props.theme.secundary};

    @media (min-width: 42em) {
        width: 40rem;
        height: 40rem;
    }

    @media (min-width: 60em) {
        top: 5rem;
        left: 3rem;
        width: 44rem;
        height: 44rem;
    }
`;

export default AppContainer;
