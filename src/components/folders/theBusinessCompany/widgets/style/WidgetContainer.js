import styled from "styled-components";

export const WidgetContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 1.5rem;

    @media (min-width: 50rem) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
