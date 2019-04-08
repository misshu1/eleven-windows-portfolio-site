import styled from "styled-components";
import bg from "../img/bg.jpg";

export const BackgroundContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: fit-content;
    background: url(${bg}) no-repeat;
    background-position: center;
    background-size: cover;
    color: #fff;
    margin-top: 2.5rem;
    overflow-y: scroll;
    /* Hide Scrollbar */
    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    @media (min-width: 28em) {
        height: calc(100% - 2.5rem);
        margin-top: 0;
    }
`;
