import styled, { css } from "styled-components";

export const AppIcon = styled.div`
    &&::after {
        content: "";
        background: rgb(0, 110, 220);
        position: absolute;
        bottom: 0;
        left: 15%;
        height: 2px;
        width: 70%;
        transition: all 0.2s;
    }

    ${props =>
        props.appIndex === 104 &&
        props.minimize !== true &&
        css`
            background: ${props => props.theme.iconBg};
            &&::after {
                left: 0;
                width: 100%;
            }
        `};

    position: relative;
    box-sizing: border-box;
    height: 100%;
    line-height: 3.5rem;
    width: 3.5rem;
    padding: 0 0.5rem;
    margin: 0 1px;
    transition: all 0.2s;

    && img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
    }

    &&:hover::after {
        left: 0;
        width: 100%;
        transition: all 0.4s;
    }

    &&:hover {
        background: ${props => props.theme.iconBgHover};
        transition: all 0.2s;
    }
`;
