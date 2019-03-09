import styled from "styled-components";

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${props => props.theme.default};
    height: 100%;
    width: 3rem;
    color: ${props => props.theme.textColor};
    && div {
        display: none;
    }

    && a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: red;
        width: 100%;
        height: 100%;
        text-decoration: none;
        cursor: default;
        color: ${props => props.theme.textColor};
    }

    && div:hover {
        background: ${props => props.theme.secundary};
    }

    && :nth-child(2):hover {
        background: #ff0000;
    }
    @media (min-width: 450px) {
        width: 6rem;
        && div {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 50%;
            height: 100%;
        }
        && a {
            width: 50%;
            background: transparent;
        }
    }
`;

export default Buttons;
