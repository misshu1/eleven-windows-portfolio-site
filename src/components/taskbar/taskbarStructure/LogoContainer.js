import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
    width: 33.33%;
    height: 100%;
    align-self: center;

    @media (min-width: 450px) {
        width: 5rem;
    }
`;

export default LogoContainer;
