import styled from "styled-components";
import bg from "../img/bg.jpg";

const BackgroundContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 2.5rem);
    background: url(${bg}) no-repeat;
    background-position: center;
    background-size: cover;
    color: #fff;
`;

export default BackgroundContainer;
