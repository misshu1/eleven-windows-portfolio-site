import styled from "styled-components";
import bg1 from "../desktop/img/bg1.jpg";

const Desktop = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100%;
    background: url(${bg1});
    background-size: cover;
    overflow: hidden;
`;

export default Desktop;
