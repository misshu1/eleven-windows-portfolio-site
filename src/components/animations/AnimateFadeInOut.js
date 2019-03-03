import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
}
100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
100% {
    opacity: 0;
    transform: scale3d(0.7, 0.7, 0.7);
}
`;

// Child element must be a 'section' element
const AnimateFadeInOut = styled.div`
    min-width: fit-content;
    min-height: fit-content;

    && section:first-child {
        position:absolute;

        @media (min-width: 28em) {
                ${props =>
                    props.open === "open" &&
                    css`
                        animation: ${fadeIn} 0.2s ease-out 1 forwards;
                    `}
                ${props =>
                    props.close === "close" &&
                    css`
                        animation: ${fadeOut} 0.2s ease 1 forwards;
                    `}
                ${props =>
                    props.appIndex === 104 &&
                    css`
                        outline: 1px solid #01307c;
                        -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
                        -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
                        box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
                    `};
        }
    }
`;

export default AnimateFadeInOut;
