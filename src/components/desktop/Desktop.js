import styled from "styled-components";
import bg from "../desktop/img/bg.jpg";

const Desktop = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100%;
    color: #d6d8de;
    background: url(${bg});
    background-size: cover;
    background-position: top left;
    overflow: hidden;
`;

export default Desktop;
