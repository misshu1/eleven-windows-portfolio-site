import styled from "styled-components";
import bgDesktop from "../../desktop/img/bg-desktop.jpg";
import bgMobile from "../../desktop/img/bg-mobile.jpg";
import bgTablet from "../../desktop/img/bg-tablet.jpg";

export const DesktopContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100%;
    color: #d6d8de;
    background: url(${bgMobile});
    background-size: cover;
    background-position: top left;
    overflow: hidden;

    @media (min-width: 28rem) and (max-width: 56.24rem) {
        background: url(${bgTablet});
        background-size: cover;
    }

    @media (min-width: 56.25rem) {
        background: url(${bgDesktop});
        background-size: cover;
    }
`;
