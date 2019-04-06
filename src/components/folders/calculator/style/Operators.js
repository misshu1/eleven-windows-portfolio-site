import styled from "styled-components";

export const Operators = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    && button {
        box-sizing: border-box;
        margin: 1px;
        padding: 0;
        border: none;
        outline: none;
        width: 5rem;
        font-size: 1.8rem;
        background: ${props => props.theme.calcOperatorButtonBg};
        color: ${props => props.theme.textColor};
    }
    && button:hover,
    button:focus {
        border: 1px solid ${props => props.theme.folderBorder};
        background: ${props => props.theme.calcOperatorButtonHover};
        color: ${props => props.theme.textColor};
    }
    && button:nth-child(5) {
        background: red;
        color: #fff;
    }
    @media (max-width: 28rem) {
        && button {
            max-height: 23vw;
            max-width: 23vw;
        }
    }
`;
