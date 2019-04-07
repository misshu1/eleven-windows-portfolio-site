import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    color: #53b8c4;
    font-size: 1.2rem;
    font-size: 8vw;
    font-weight: 500;
    text-transform: uppercase;
    margin: 2rem auto;

    && :nth-child(1) {
        display: inline-block;
        padding: 0 0.5rem;
        margin-right: 0.5rem;
        background: #000;
        -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    }
    @media (min-width: 25rem) {
        && {
            font-size: 2rem;
        }
    }
`;
