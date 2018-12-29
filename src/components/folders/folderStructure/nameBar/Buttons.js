import styled from "styled-components";

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${props => props.theme.default};
    height: 100%;
    width: 3rem;
    color: ${props => props.theme.textColor};
    && a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: ${props => props.theme.textColor};
    }
    &&:hover {
        background: ${props =>
            props.hoverBg ? props.hoverBg : props.theme.secundary};
        color: ${props => (props.hoverColor ? props.hoverColor : "")};
    }
`;

export default Buttons;
