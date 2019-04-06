import styled from "styled-components";

export const NumberPad = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
    && button {
        box-sizing: border-box;
        background: ${props => props.theme.calcNumButtonBg};
        color: ${props => props.theme.textColor};
        font-size: 1.8rem;
        margin: 1px;
        padding: 0;
        border: none;
        outline: none;
        height: 6rem;
        width: 5rem;
    }
    && button:hover,
    button:focus {
        border: 1px solid ${props => props.theme.folderBorder};
        background: ${props => props.theme.calcNumButtonHover};
        color: ${props => props.theme.textColor};
    }
    @media (max-width: 28rem) {
        && button {
            max-height: 28vw;
            max-width: 23vw;
        }
    }
`;
