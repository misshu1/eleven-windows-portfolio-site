import styled from "styled-components";

const SpinnerContainer = styled.div`
    color: #d6d8de;
    z-index: 200;
    position: absolute;
    top: calc(50% - 3.5rem);
    left: 50%;
    transform: translate(50%, calc(50% - 3.5rem));
`;

export default SpinnerContainer;
