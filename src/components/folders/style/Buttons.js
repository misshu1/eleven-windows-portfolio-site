import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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
        color: #d6d8de;
    }

    && div:hover,
    && div:focus {
        background: ${props => props.theme.folderNameBarBtnHover};
    }

    && :nth-child(2):hover,
    && :nth-child(2):focus {
        background: #ff0000;
        color: #d6d8de;
        outline: none;
    }
    @media (min-width: 28rem) {
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
            color: ${props => props.theme.textColor};
            background: transparent;
        }
    }
`;
