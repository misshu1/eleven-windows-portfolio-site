import styled from "styled-components";

const BackButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
    align-self: center;
    justify-content: center;
    @media (min-width: 450px) {
        display: none;
    }
`;

export default BackButtonContainer;
