import styled from "styled-components";

const OpenAppsContainer = styled.div`
    display: none;
    @media (min-width: 28rem) {
        display: flex;
        flex: 1;
        margin: 0 0.2rem;
        padding: 0 0.5rem;
        align-items: center;
        justify-content: left;
        height: 100%;
        border-left: 3px dashed black;
        border-right: 3px dashed black;
    }
`;

export default OpenAppsContainer;
