import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform:  scale3d(0.7,0.7,0.7) translate3d(0, -4rem, 0);
}
100% {
    opacity: 1;
    transform:  scale3d(1,1,1) translate3d(0, 0, 0);
}
`;

const initialItemsVisible = null;

export const ItemName = styled.h3`
    position: relative;
    width: 6rem;
    margin: 0;
    padding-right: 1.5rem;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 2px solid #53b8c4;
    ${props =>
        props.showItems !== initialItemsVisible &&
        css`
            animation: ${fadeIn} 0.3s ease-out 1 forwards;
        `}
`;
