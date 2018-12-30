import styled from "styled-components";

const OpenAppsContainer = styled.div`
    display: none;
    @media (min-width: 450px) {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: left;
        height: 100%;
    }
`;

export default OpenAppsContainer;
