import styled from "styled-components";

const BoxImg = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    @media (min-width: 28em) {
        flex-direction: row;
    }
`;

export default BoxImg;
