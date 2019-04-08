import styled from "styled-components";

export const MapContainer = styled.div`
    margin-top: 2.5rem;
    height: 100%;

    @media (min-width: 28em) {
        margin-top: 0;
        height: calc(100% - 2.5rem);
    }
`;
