import styled from "styled-components";

const Card = styled.li`
    height: 6.5rem;
    width: 6.5rem;
    background: #2e3d49;
    font-size: 1.56rem;
    border-radius: 8px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);

    /* Open card styles */
    transform: ${props => (props.open ? "rotateY(180deg)" : "")};
    transform-style: ${props => (props.open ? "preserve-3d" : "")};
    transition: ${props => (props.open ? "0.3s" : "")};
    background: ${props => (props.open ? "#2792dd" : "")};
    pointer-events: ${props => (props.open ? "none" : "auto")};
    cursor: ${props => (props.open ? "default" : "pointer")};
    && :nth-child(1) {
        font-size: ${props => (props.open ? "25px" : "0")};
        display: ${props => (props.open ? "box" : "none")};
    }

    /* Matched cards styles */
    background: ${props => (props.match ? "#09e589" : "")};
    color: ${props => (props.match ? "#000" : "")};
    font-size: ${props => (props.match ? "2rem" : "")};
    pointer-events: ${props => (props.open ? "none" : "")};
    @media (max-width: 660px) {
        max-height: 13.5vw;
        max-width: 13.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1vw;
    }
`;

export default Card;
