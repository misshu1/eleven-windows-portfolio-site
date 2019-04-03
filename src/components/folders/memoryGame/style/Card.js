import styled from "styled-components";

export const Card = styled.li`
    box-sizing: border-box;
    height: 7rem;
    width: 7rem;
    background: #2e3d49;
    font-size: 1.56rem;
    border-radius: 0.5rem;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    box-shadow: 0.31rem 0.125rem 1.5rem 0 rgba(46, 61, 73, 0.5);

    /* Open card styles */
    transform: ${props => (props.open ? "rotateY(180deg)" : "")};
    transform-style: ${props => (props.open ? "preserve-3d" : "")};
    transition: ${props => (props.open ? "0.3s" : "")};
    background: ${props => (props.open ? "#2792dd" : "")};
    pointer-events: ${props => (props.open ? "none" : "auto")};
    cursor: ${props => (props.open ? "default" : "pointer")};
    && :nth-child(1) {
        font-size: ${props => (props.open ? "2rem" : "0")};
        display: ${props => (props.open ? "box" : "none")};
    }

    /* Matched cards styles */
    background: ${props => (props.match ? "#09e589" : "")};
    color: ${props => (props.match ? "#000" : "")};
    font-size: ${props => (props.match ? "2rem" : "")};
    pointer-events: ${props => (props.open ? "none" : "")};
    @media (max-width: 660px) {
        max-height: 16vw;
        max-width: 16vw;
    }
`;
