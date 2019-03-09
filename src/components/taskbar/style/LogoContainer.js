import styled from "styled-components";

const LogoContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;

    @media (min-width: 450px) {
        width: 4rem;
        &&:hover {
            background: rgba(100, 100, 100, 0.3);
        }
    }
`;

export default LogoContainer;
