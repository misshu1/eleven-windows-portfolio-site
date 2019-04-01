import styled from "styled-components";
import bg from "../img/bg.jpg";

export const BackgroundContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: fit-content;
    height: calc(100% - 2.5rem);
    background: url(${bg}) no-repeat;
    background-position: center;
    background-size: cover;
    color: #fff;
    margin-top: 2.5rem;
    @media (min-width: 28em) {
        margin-top: 0;
    }
`;
