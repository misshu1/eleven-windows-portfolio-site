import styled from "styled-components";

const HomeButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
    @media (min-width: 450px) {
        display: none;
    }
`;

export default HomeButtonContainer;
