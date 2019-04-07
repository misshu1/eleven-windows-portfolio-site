import styled from "styled-components";

export const Backdrop = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.7);
    display: ${props => (props.login === "open" ? "block" : "none")};
`;
