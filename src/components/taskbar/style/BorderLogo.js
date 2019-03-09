import styled, { keyframes } from "styled-components";

const animate = keyframes`
0% {
    transform: scaleX(0);
    transform-origin: left;
}
50% {
    transform: scaleX(1);
    transform-origin: left;
}
50.1% {
    transform: scaleX(1);
    transform-origin: right;
}
100% {
    transform: scaleX(0);
    transform-origin: right;
}

`;
const BorderLogo = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    width: 3rem;
    height: 3rem;
    && span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        box-sizing: border-box;
    }

    && span:nth-child(1) {
        transform: rotate(0deg);
    }

    && span:nth-child(2) {
        transform: rotate(90deg);
    }

    && span:nth-child(3) {
        transform: rotate(180deg);
    }

    && span:nth-child(4) {
        transform: rotate(270deg);
    }

    && span:nth-child(2):before {
        animation-delay: -1.5s;
    }

    && span:nth-child(4):before {
        animation-delay: -1.5s;
    }

    && span:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #f80012;
        animation: ${animate} 3s linear infinite;
    }
`;

export default BorderLogo;
