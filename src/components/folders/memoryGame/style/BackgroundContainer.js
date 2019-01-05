import styled from "styled-components";
import bg from "../img/bg.jpg";

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background: url(${bg}) no-repeat;
    background-position: center;
    background-size: cover;
    color: #fff;
`;

export default BackgroundContainer;
