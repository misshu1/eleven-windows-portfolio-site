import styled from "styled-components";

const AppContainer = styled.div`
    position: absolute;
    display: ${props => (props.calculatorOpen === "open" ? "box" : "none")};
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: #202020;

    @media (min-width: 28em) {
        height: 42rem;
        width: 28rem;
    }
`;

export default AppContainer;
