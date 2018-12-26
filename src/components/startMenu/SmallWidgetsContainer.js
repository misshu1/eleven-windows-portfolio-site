import styled from "styled-components";

const SmallWidgetsContainer = styled.div`
    box-sizing: border-box;
    width: 5em;
    display: none;
    @media (min-width: 450px) {
        display: block;
    }
`;

export default SmallWidgetsContainer;
