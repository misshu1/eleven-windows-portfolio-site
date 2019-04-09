import styled from "styled-components";
import bgDesktop from "../img/bgDesktop.jpg";
import bgMobile from "../img/bgMobile.jpg";

export const AppContainer = styled.section`
    position: absolute;
    box-sizing: border-box;
    padding-bottom: 3.5rem;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.5rem);
    background: url(${bgMobile}) no-repeat center / cover;
    filter: brightness(80%);
    color: #edeeef;
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    @media (min-width: 28em) {
        background: url(${bgDesktop}) no-repeat center right/ cover;
        height: 44rem;
        width: 44rem;
        padding-bottom: 0;
    }

    @media (min-width: 50em) {
        top: 9rem;
        left: 9rem;
    }
`;
