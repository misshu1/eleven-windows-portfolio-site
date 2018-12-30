import styled from "styled-components";

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${props => props.theme.default};
    height: 100%;
    width: 6rem;
    color: ${props => props.theme.textColor};
    && div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        height: 100%;
    }

    && a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        height: 100%;
        text-decoration: none;
        color: ${props => props.theme.textColor};
    }

    && div:hover {
        background: ${props => props.theme.secundary};
    }

    && :nth-child(2):hover {
        background: #ff0000;
    }
`;

export default Buttons;
