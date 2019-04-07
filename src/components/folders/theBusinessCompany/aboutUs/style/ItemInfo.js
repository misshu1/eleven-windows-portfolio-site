import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform:  scale3d(0.7,0.7,0.7) translate3d(0, -5rem, 0);
}
100% {
    opacity: 1;
    transform:  scale3d(1,1,1) translate3d(0, 0, 0);
}
`;

export const ItemInfo = styled.div`
    box-sizing: border-box;
    display: ${props => (props.show ? "block" : "none")};
    width: 7.5rem;
    background: #53b8c4;
    color: #fff;
    padding: 1rem 0.5rem;
    animation: ${fadeIn} 0.3s ease-out 1 forwards;
`;
